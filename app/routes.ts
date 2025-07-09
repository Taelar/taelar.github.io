import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from '@react-router/dev/routes'

export default [
	index('pages/Redirect/index.tsx'),
	layout('./layouts/DefaultLayout/index.ts', [
		...prefix('fr', [index('pages/Resume/index.ts', { id: 'frResume' })]),
		...prefix('en', [index('pages/Resume/index.ts', { id: 'enResume' })]),
	]),
] satisfies RouteConfig
