import { type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet } from 'react-router'
import { Icon } from '~/components/Icon'
import { IconBookmark } from '~/components/IconBookmark'
import { TriangleBackground, WaterBackground } from '~/components/backgrounds'
import { useSearchParamsState } from '~/hooks/useSearchParamsState'
import { ButtonGroup, type GroupOption } from '~/components/ButtonGroup'

type SearchParams = {
	background: 'triangle' | 'water'
}

const backgroundOptions: Array<GroupOption<SearchParams['background']>> = [
	{ value: 'triangle', label: 'Style de fond : Triangles', icon: 'triangle' },
	{ value: 'water', label: 'Style de fond : Eau', icon: 'drop' },
]

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
				<div className={styles['backgroundSelect']}>
					<ButtonGroup
						value={searchParams.background}
						options={backgroundOptions}
						onSelect={(selected) =>
							setSearchParams({
								background: selected.value,
							})
						}
					/>
				</div>
			</header>
			<main className={styles['main']}>
				<Outlet />
				{searchParams.background === 'triangle' && <TriangleBackground />}
				{searchParams.background === 'water' && <WaterBackground />}
			</main>
		</>
	)
}

export default DefaultLayout
