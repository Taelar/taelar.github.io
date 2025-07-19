import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from '@react-router/dev/routes'

export default [
	index('pages/Redirect/index.tsx'),
	...prefix('fr', [
		layout('./layouts/DefaultLayout/index.ts', { id: 'frRoot' }, [
			index('pages/Resume/index.ts', { id: 'frResume' }),
		]),
	]),
	...prefix('en', [
		layout('./layouts/DefaultLayout/index.ts', { id: 'enRoot' }, [
			index('pages/Resume/index.ts', { id: 'enResume' }),
		]),
	]),
] satisfies RouteConfig
