import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	type LoaderFunctionArgs,
} from 'react-router'

import type { Route } from './+types/root'
import './style/app.scss'
import './style/reset.scss'
import './style/elements.scss'
import {
	DEFAULT_LANGUAGE,
	SUPPORTED_LANG_KEYS,
	type SupportedLangKeys,
} from './model/lang'

interface RootLoaderData {
	lang: SupportedLangKeys
}

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export async function loader(
	args: LoaderFunctionArgs,
): Promise<RootLoaderData> {
	let lang = DEFAULT_LANGUAGE

	try {
		const { url } = args.request
		const path = new URL(url).pathname
		const splited = path.split('/')
		const parsedLang = splited.at(1) as SupportedLangKeys | undefined

		if (parsedLang && SUPPORTED_LANG_KEYS.includes(parsedLang)) {
			lang = parsedLang
		}
	} catch (e) {
		console.warn('Failed to parse current lang', e)
	}

	return { lang }
}

export default function App() {
	const { lang } = useLoaderData<RootLoaderData>()

	return (
		<html lang={lang}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oups!'
	let details = "Une erreur s'est produite"
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'Cette page est introuvable'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<html lang="en" className="error_body">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<main className="error_boundary">
					<h1>{message}</h1>
					<p>{details}</p>
					{stack && (
						<pre className="error_stacktrace">
							<code>{stack}</code>
						</pre>
					)}
				</main>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
