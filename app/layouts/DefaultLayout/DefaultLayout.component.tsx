import { type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet } from 'react-router'
import { useWaterCanvas } from '~/hooks/useWaterCanvas'
import { Icon } from '~/components/Icon'
import { IconBookmark } from '~/components/IconBookmark'

const DefaultLayout: FC = () => {
	const { ripplesInterval, setRipplesInterval } = useWaterCanvas()

	return (
		<>
			<header className={styles['header']}>
				<a
					className={styles['githubLink']}
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Taelar/taelar.github.io"
					title="Dépôt Github"
				>
					<IconBookmark theme="dark">
						<Icon icon="github" additionnalClassNames={styles['logo']} />
					</IconBookmark>
				</a>
			</header>
			<Outlet />
			<footer className={styles['footer']}>
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
			</footer>
		</>
	)
}

export default DefaultLayout
