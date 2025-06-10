import { useEffect, useRef, useState } from 'react'
import { initWaterCanvas } from './useWaterCanvas.animation'
import { randInt } from '~/utils/number.utils'

export const useWaterCanvas = () => {
	const animationRef = useRef<ReturnType<typeof initWaterCanvas>>(undefined)
	const intervalRef = useRef<NodeJS.Timeout>(undefined)

	const [ripplesInterval, setRipplesInterval] = useState(2000)

	useEffect(() => {
		if (!animationRef.current) {
			animationRef.current = initWaterCanvas()
		}

		return () => {
			animationRef.current?.destroy()
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
		}, ripplesInterval)

		return () => {
			clearInterval(intervalRef.current)
		}
	}, [ripplesInterval])

	return { ripplesInterval, setRipplesInterval }
}
