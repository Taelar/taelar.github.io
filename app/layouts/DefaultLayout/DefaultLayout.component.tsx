import { type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet } from 'react-router'
import githubLogo from './assets/github.svg'
import { useWaterCanvas } from '~/hooks/useWaterCanvas'

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
				>
					<img className={styles['logo']} src={githubLogo} alt="Dépôt Github" />
				</a>
				<select
					onChange={(event) => {
						const parsed = Number.parseInt(event.currentTarget.value)
						if (!Number.isInteger(parsed)) return
						setRipplesInterval(parsed)
					}}
					value={ripplesInterval}
				>
					<option value="50">50</option>
					<option value="500">500</option>
					<option value="2000">2000</option>
					<option value="5000">5000</option>
				</select>
			</header>
			<Outlet />
		</>
	)
}

export default DefaultLayout
