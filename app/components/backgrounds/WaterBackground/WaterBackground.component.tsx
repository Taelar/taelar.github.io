import { type FC } from 'react'
import styles from './WaterBackground.module.scss'
import { useWaterCanvas } from '~/hooks/useWaterCanvas'
import { Icon } from '~/components/Icon'

export const WaterBackground: FC = () => {
	const { ripplesInterval, setRipplesInterval } = useWaterCanvas()

	return (
		<>
			<div className={styles['background']}></div>
			<div className={styles['ripplesSelect']}>
				<Icon icon="drop" additionnalClassNames={styles['icon']} />
				<select
					value={ripplesInterval}
					title="Fréquence des ondulations"
					onChange={(event) => {
						const parsed = Number.parseInt(event.currentTarget.value)
						if (!Number.isInteger(parsed)) return
						setRipplesInterval(parsed)
					}}
				>
					<option value="50">Chaos</option>
					<option value="500">Rapide</option>
					<option value="2000">Moyen</option>
					<option value="5000">Lent</option>
				</select>
			</div>
		</>
	)
}
