import { useEffect, useRef } from 'react'
import { initWaterCanvas } from './useWaterCanvas.animation'
import { randInt } from '~/utils/number.utils'

const RANDOM_RIPPLES_INTERVAL = 3000

export const useWaterCanvas = () => {
	const animationRef = useRef<ReturnType<typeof initWaterCanvas>>(undefined)
	const intervalRef = useRef<NodeJS.Timeout>(undefined)

	useEffect(() => {
		if (!animationRef.current) {
			animationRef.current = initWaterCanvas()
		}
	}, [])

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			if (!animationRef.current) return

			animationRef.current.renderWaterRipple((width, height) => {
				const x = randInt(0, width)
				const y = randInt(0, height)

				return { x, y }
			})

			const timeout = randInt(10, 50)

			setTimeout(() => {
				animationRef.current?.endWaterRippleRendering()
			}, timeout)
		}, RANDOM_RIPPLES_INTERVAL)
	}, [])

	return { animation: animationRef.current }
}
