import { useMemo, type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet, useLoaderData, type LoaderFunctionArgs } from 'react-router'
import { Icon } from '~/components/Icon'
import { IconBookmark } from '~/components/IconBookmark'
import { TriangleBackground, WaterBackground } from '~/components/backgrounds'
import { useSearchParamsState } from '~/hooks/useSearchParamsState'
import { ButtonGroup, type GroupOption } from '~/components/ButtonGroup'
import { LANG_FILES } from '~/model/lang/lang.model'
import { getLangFromContext } from '~/utils/loader.utils'
import { LangContext } from '~/context/Lang.context'

type SearchParams = {
	background: 'triangle' | 'water'
}

export async function loader(args: LoaderFunctionArgs) {
	const langKey = getLangFromContext(args)
	const langFile = LANG_FILES[langKey]

	return { langKey, langFile }
}

type LoaderData = Awaited<ReturnType<typeof loader>>

const DefaultLayout: FC = () => {
	const { langFile, langKey } = useLoaderData<LoaderData>()

	const [searchParams, setSearchParams] = useSearchParamsState<SearchParams>({
		background: 'triangle',
	})

	const backgroundOptions = useMemo<
		Array<GroupOption<SearchParams['background']>>
	>(
		() => [
			{
				value: 'triangle',
				label: langFile.layout.background.triangles.title,
				icon: 'triangle',
			},
			{
				value: 'water',
				label: langFile.layout.background.water.title,
				icon: 'drop',
			},
		],
		[
			langFile.layout.background.triangles.title,
			langFile.layout.background.water.title,
		],
	)

	return (
		<LangContext value={{ langFile, langKey }}>
			<header className={styles['header']}>
				<a
					className={styles['githubLink']}
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Taelar/taelar.github.io"
					title={langFile.layout.githubRepo}
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
		</LangContext>
	)
}

export default DefaultLayout
