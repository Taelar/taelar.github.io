import { type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet } from 'react-router'
import { Icon } from '~/components/Icon'
import { IconBookmark } from '~/components/IconBookmark'
import { TriangleBackground, WaterBackground } from '~/components/backgrounds'
import { useSearchParamsState } from '~/hooks/useSearchParamsState'

type SearchParams = {
	background: 'triangle' | 'water'
}

const DefaultLayout: FC = () => {
	const [searchParams, setSearchParams] = useSearchParamsState<SearchParams>({
		background: 'triangle',
	})

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
			<main className={styles['main']}>
				<Outlet />
				{searchParams.background === 'triangle' && <TriangleBackground />}
				{searchParams.background === 'water' && <WaterBackground />}
			</main>
			<footer className={styles['footer']}>
				<select
					value={searchParams.background}
					title="Style de fond"
					onChange={(event) => {
						const parsed = event.currentTarget.value

						if (parsed === 'triangle' || parsed === 'water') {
							setSearchParams({
								background: parsed,
							})
						}
					}}
				>
					<option value="triangle">Triangles</option>
					<option value="water">Eau</option>
				</select>

				<div className={styles['ripplesSelect']}>
					{/* <Icon icon="drop" additionnalClassNames={styles['icon']} /> */}
					{/* <select
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
					</select> */}
				</div>
			</footer>
		</>
	)
}

export default DefaultLayout
