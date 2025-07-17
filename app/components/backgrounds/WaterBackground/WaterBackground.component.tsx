import { useContext, type FC } from 'react'
import styles from './WaterBackground.module.scss'
import { useWaterCanvas } from '~/hooks/useWaterCanvas'
import { Icon } from '~/components/Icon'
import { LangContext } from '~/context/Lang.context'

export const WaterBackground: FC = () => {
	const { langFile } = useContext(LangContext)
	const { ripplesInterval, setRipplesInterval } = useWaterCanvas()

	return (
		<>
			<div className={styles['background']}></div>
			<div className={styles['ripplesSelect']}>
				<Icon icon="drop" additionnalClassNames={styles['icon']} />
				<select
					value={ripplesInterval}
					title={langFile.layout.background.water.select.title}
					onChange={(event) => {
						const parsed = Number.parseInt(event.currentTarget.value)
						if (!Number.isInteger(parsed)) return
						setRipplesInterval(parsed)
					}}
				>
					<option value="50">
						{langFile.layout.background.water.select.chaos}
					</option>
					<option value="500">
						{langFile.layout.background.water.select.fast}
					</option>
					<option value="2000">
						{langFile.layout.background.water.select.medium}
					</option>
					<option value="5000">
						{langFile.layout.background.water.select.slow}
					</option>
				</select>
			</div>
		</>
	)
}
