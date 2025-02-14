import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes'

export default [
	layout('./layouts/DefaultLayout/index.ts', [
		index('routes/home.tsx'),
		route('wip', 'routes/resume.tsx'),
	]),
] satisfies RouteConfig
