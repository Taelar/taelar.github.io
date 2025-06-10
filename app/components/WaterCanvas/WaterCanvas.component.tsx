import { useEffect, type FC } from 'react'
import styles from './WaterCanvas.module.scss'
import { initWaterCanvas } from './WaterCanvas.animation'

export const WaterCanvas: FC = () => {
	useEffect(() => {
		initWaterCanvas()
	}, [])

	return <></>
}
