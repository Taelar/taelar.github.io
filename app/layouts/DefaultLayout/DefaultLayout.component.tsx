import { useMemo, type FC } from 'react'
import styles from './DefaultLayout.module.scss'
import { Outlet, useLoaderData, type LoaderFunctionArgs } from 'react-router'
import { Icon } from '~/components/Icon'
import { IconBookmark } from '~/components/IconBookmark'
import { TriangleBackground, WaterBackground } from '~/components/backgrounds'
import { useSearchParamsState } from '~/hooks/useSearchParamsState'
import { ButtonGroup, type GroupOption } from '~/components/ButtonGroup'
import {
	LANG_FILES,
	LANG_NAME as LANG_NAMES,
	SUPPORTED_LANG_KEYS,
	type SupportedLangKeys,
} from '~/model/lang/lang.model'
import { getLangFromContext } from '~/utils/loader'
import { LangContext } from '~/context/Lang.context'
import { HuntingParty } from '~/components/curtains/HuntingParty'

type SearchParams = {
	background: 'triangle' | 'water'
	curtain: 'huntingParty' | null
}

const langOptions: Array<GroupOption<SupportedLangKeys>> =
	SUPPORTED_LANG_KEYS.map((key) => ({
		url: `/${key}`,
		label: LANG_NAMES[key],
		text: key.toLocaleUpperCase(),
	}))

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
		curtain: null,
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

	const curtainOptions = useMemo<Array<GroupOption<SearchParams['curtain']>>>(
		() => [
			{
				value: null,
				label: langFile.layout.curtains.visualisation.title,
				icon: 'eye',
			},
			{
				value: 'huntingParty',
				label: langFile.layout.curtains.huntingParty.title,
				icon: 'crosshair',
			},
		],
		[langFile],
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
				<ButtonGroup value={`/${langKey}`} options={langOptions} />
				<div className={styles['backgroundSelect']}>
					<ButtonGroup
						value={searchParams.background}
						options={backgroundOptions}
						onSelect={(selected) => {
							if (!('value' in selected)) return

							setSearchParams({
								...searchParams,
								background: selected.value,
							})
						}}
					/>
				</div>
				<ButtonGroup
					value={searchParams.curtain}
					options={curtainOptions}
					onSelect={(selected) => {
						if (!('value' in selected)) return

						setSearchParams({
							...searchParams,
							curtain: selected.value,
						})
					}}
				/>
			</header>
			<main className={styles['main']}>
				<Outlet />
				{searchParams.background === 'triangle' && <TriangleBackground />}
				{searchParams.background === 'water' && <WaterBackground />}
			</main>
			{searchParams.curtain === 'huntingParty' && <HuntingParty />}
		</LangContext>
	)
}

export default DefaultLayout
