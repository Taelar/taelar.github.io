import { type FC } from 'react'
import styles from './WaterBackground.module.scss'
import { useWaterCanvas } from '~/hooks/useWaterCanvas'

export const WaterBackground: FC = () => {
	const { ripplesInterval, setRipplesInterval } = useWaterCanvas()

	return <div className={styles['background']}></div>
}
