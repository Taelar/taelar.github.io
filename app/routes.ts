import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from '@react-router/dev/routes'

export default [
	index('routes/redirect.tsx'),
	layout('./layouts/DefaultLayout/index.ts', [
		...prefix('fr', [index('routes/resume.tsx', { id: 'frResume' })]),
		...prefix('en', [index('routes/resume.tsx', { id: 'enResume' })]),
	]),
] satisfies RouteConfig
