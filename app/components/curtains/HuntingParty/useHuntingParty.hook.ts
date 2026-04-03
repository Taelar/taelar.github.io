import { useCallback, useState, type RefObject } from 'react'
import { useInterval } from 'usehooks-ts'
import { randInt } from '~/utils/number'

const GAME_TICKS = 25
const SPAWN_INTERVAL = 1000
const SATURATION_FACTOR = 0.7
const SATURATION_CHECK_INTERVAL = 1000
const MIN_RADIUS = 20
const MAX_RADIUS = 100
const DISAPPEARING_COUNTDOWN_START = 1200

interface Element {
	id: number
	x: number
	y: number
	radius: number
}

export interface Target extends Element {
	vx: number
	vy: number
}

export interface DispearingTarget extends Element {
	disappearingCountdown: number | null
}

const INITIAL_TARGETS: Array<Target> = []
const INITIAL_DISAPPEARINGS: Array<DispearingTarget> = []

export const useHuntingParty = (ref: RefObject<HTMLDivElement | null>) => {
	const [targets, setTargets] = useState<Array<Target>>(INITIAL_TARGETS)
	const [disappearings, setDisappearings] = useState(INITIAL_DISAPPEARINGS)

	const spawnTarget = useCallback((x: number, y: number, radius: number) => {
		const newTarget: Target = {
			id: Date.now(),
			x,
			y,
			vx: randInt(-10, 10),
			vy: randInt(-10, 10),
			radius: radius,
		}

		const newDissapearing: DispearingTarget = {
			id: newTarget.id,
			x: -100,
			y: -100,
			radius: newTarget.radius * 2,
			disappearingCountdown: null,
		}

		setTargets((prevTargets) => [...prevTargets, newTarget])
		setDisappearings((prev) => [...prev, newDissapearing])
	}, [])

	// Update position and check for boundary collisions
	useInterval(() => {
		const containerWidth = ref.current?.offsetWidth || 0
		const containerHeight = ref.current?.offsetHeight || 0

		setDisappearings((prevDisappearings) =>
			prevDisappearings.reduce((acc: Array<DispearingTarget>, target) => {
				if (target.disappearingCountdown === null) {
					acc.push(target)
					return acc
				}

				const newTarget = structuredClone(target)
				if (newTarget.disappearingCountdown === null) return acc // Type guard, should not happen

				newTarget.disappearingCountdown -= GAME_TICKS

				if (newTarget.disappearingCountdown > 0) {
					acc.push(newTarget)
				}

				return acc
			}, []),
		)

		setTargets((prevTargets) => {
			const bounded = prevTargets.map((target) => {
				const newTarget = structuredClone(target)

				newTarget.x += newTarget.vx
				newTarget.y += newTarget.vy

				// If above left boundary, redirect towards the center
				if (newTarget.x - newTarget.radius < 0 && newTarget.vx < 0) {
					newTarget.vx = -newTarget.vx
				}
				// If above right boundary, redirect towards the center
				if (
					newTarget.x + newTarget.radius > containerWidth &&
					newTarget.vx > 0
				) {
					newTarget.vx = -newTarget.vx
				}

				// If above top boundary, redirect towards the center
				if (newTarget.y - newTarget.radius < 0 && newTarget.vy < 0) {
					newTarget.vy = -newTarget.vy
				}
				// If above bottom boundary, redirect towards the center
				if (
					newTarget.y + newTarget.radius > containerHeight &&
					newTarget.vy > 0
				) {
					newTarget.vy = -newTarget.vy
				}

				return newTarget
			})

			// Check for collisions between targets
			const collisioned = bounded.map((target) => {
				const newTarget = structuredClone(target)

				for (const other of bounded) {
					if (other.id === target.id) continue

					const dx = other.x - target.x
					const dy = other.y - target.y
					const distance = Math.sqrt(dx * dx + dy * dy)
					const minDist = target.radius + other.radius
					if (distance >= minDist || distance === 0) continue

					// 1. Normal vector (from target to other)
					const nx = dx / distance
					const ny = dy / distance

					// 2. Relative velocity projected on the normal axis
					const dvn =
						(newTarget.vx - other.vx) * nx + (newTarget.vy - other.vy) * ny

					// 3. If already moving apart, do nothing
					if (dvn <= 0) continue

					// 4. Impulse scalar (masses are equal and cancel out)
					newTarget.vx -= dvn * nx
					newTarget.vy -= dvn * ny
				}
				return newTarget
			})

			return collisioned
		})
	}, GAME_TICKS)

	// Spawn new targets at intervals
	useInterval(() => {
		const containerWidth = ref.current?.offsetWidth || 0
		const containerHeight = ref.current?.offsetHeight || 0

		const radius = randInt(MIN_RADIUS, MAX_RADIUS)

		// Randomly choose one of the 4 spawn areas (0:top, 1:bottom, 2:right, 3:left)
		const spawnArea = randInt(0, 3)

		let spawnX: number
		let spawnY: number

		const fixedAxisOffset = radius + 10
		switch (spawnArea) {
			case 0: // top
				spawnX = randInt(fixedAxisOffset * -1, containerWidth + fixedAxisOffset)
				spawnY = fixedAxisOffset * -1
				break
			case 1: // bottom
				spawnX = randInt(fixedAxisOffset * -1, containerWidth + fixedAxisOffset)
				spawnY = fixedAxisOffset + containerHeight
				break

			case 2: // right
				spawnX = fixedAxisOffset + containerWidth
				spawnY = randInt(
					fixedAxisOffset * -1,
					containerHeight + fixedAxisOffset,
				)
				break
			case 3: // left
				spawnX = fixedAxisOffset * -1
				spawnY = randInt(
					fixedAxisOffset * -1,
					containerHeight + fixedAxisOffset,
				)
				break

			default:
				spawnX = 0
				spawnY = 0
		}

		spawnTarget(spawnX, spawnY, radius)
	}, SPAWN_INTERVAL)

	// Reset targets if saturation is reached
	useInterval(() => {
		if (targets.length === 0) return

		const containerWidth = ref.current?.offsetWidth || 0
		const containerHeight = ref.current?.offsetHeight || 0
		const containerSurface = containerWidth * containerHeight

		const usedSurface = targets.reduce((acc, target) => {
			const targetSurface = Math.PI * target.radius * target.radius
			return acc + targetSurface
		}, 0)

		if (usedSurface >= containerSurface * SATURATION_FACTOR) {
			setTargets(INITIAL_TARGETS)
			setDisappearings((disappearings) =>
				disappearings.map((disappearing) => {
					const target = targets.find((t) => t.id === disappearing.id)
					if (!target) return disappearing

					return {
						...disappearing,
						disappearingCountdown: DISAPPEARING_COUNTDOWN_START,
						x: target.x,
						y: target.y,
					}
				}),
			)
		}
	}, SATURATION_CHECK_INTERVAL)

	// Hunt a target
	const handleTargetClick = useCallback(
		(id: number, event: React.MouseEvent) => {
			const target = targets.find((t) => t.id === id)
			if (!target) return

			const mouseX = event.clientX
			const mouseY = event.clientY

			setTargets((prevTargets) =>
				prevTargets.filter((target) => target.id !== id),
			)

			setDisappearings((prev) =>
				prev.map((disappearing) => {
					if (disappearing.id !== id) return disappearing

					return {
						...disappearing,
						x: mouseX ?? target.x,
						y: mouseY ?? target.y,
						disappearingCountdown: DISAPPEARING_COUNTDOWN_START,
					}
				}),
			)
		},
		[targets],
	)

	return { targets, disappearings, handleTargetClick }
}
