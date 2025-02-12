import { type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet } from 'react-router'
import githubLogo from './assets/github.svg'

const DefaultLayout: FC = () => {
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
			</header>
			<Outlet />
		</>
	)
}

export default DefaultLayout
