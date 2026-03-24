import { useState, type RefObject } from 'react'
import { useInterval } from 'usehooks-ts'

const INITIAL_TICKS = 25

export interface Target {
	id: number
	x: number
	y: number
	vx: number
	vy: number
	radius: number
}

const MOCK_TARGETS: Array<Target> = [
	{
		id: 1,
		x: 200,
		y: 200,
		vx: 7,
		vy: -10,
		radius: 50,
	},
	{
		id: 2,
		x: 400,
		y: 400,
		vx: -5,
		vy: 8,
		radius: 100,
	},
	{
		id: 3,
		x: 600,
		y: 300,
		vx: 10,
		vy: -6,
		radius: 30,
	},
]

export const useHuntingParty = (ref: RefObject<HTMLDivElement | null>) => {
	const [targets, setTargets] = useState<Array<Target>>(MOCK_TARGETS)

	useInterval(() => {
		const containerWidth = ref.current?.offsetWidth || 0
		const containerHeight = ref.current?.offsetHeight || 0

		setTargets((prevTargets) => {
			// Update position and check for boundary collisions
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
	}, INITIAL_TICKS)

	return { targets }
}
