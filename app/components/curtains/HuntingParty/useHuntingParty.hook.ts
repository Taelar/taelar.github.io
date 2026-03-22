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

		setTargets((prevTargets) =>
			prevTargets.map((target) => {
				const newTarget = structuredClone(target)

				newTarget.x += newTarget.vx
				newTarget.y += newTarget.vy

				// Check for horizontal boundaries
				if (
					newTarget.x - newTarget.radius < 0 ||
					newTarget.x + newTarget.radius > containerWidth
				) {
					newTarget.vx = -newTarget.vx
				}

				// Check for vertical boundaries
				if (
					newTarget.y - newTarget.radius < 0 ||
					newTarget.y + newTarget.radius > containerHeight
				) {
					if (newTarget.id === 3) {
						console.log(newTarget)
					}

					newTarget.vy = -newTarget.vy
				}

				return newTarget
			}),
		)
	}, INITIAL_TICKS)

	return { targets }
}
