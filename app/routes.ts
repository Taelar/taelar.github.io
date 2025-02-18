import { type RouteConfig, index, layout } from '@react-router/dev/routes'

export default [
	layout('./layouts/DefaultLayout/index.ts', [index('routes/resume.tsx')]),
] satisfies RouteConfig
