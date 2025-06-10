import { useEffect, useRef } from 'react'
import { initWaterCanvas } from './useWaterCanvas.animation'

export const useWaterCanvas = () => {
	const animationRef = useRef<object>(undefined)

	useEffect(() => {
		if (!animationRef.current) {
			animationRef.current = initWaterCanvas()
		}
	}, [])

	return { animation: animationRef.current }
}
