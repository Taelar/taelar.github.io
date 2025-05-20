import { reactRouter } from '@react-router/dev/vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [reactRouter(), tsconfigPaths()],
	build: {
		cssMinify: true,
		ssr: false,
	},
	resolve: {
		alias: {
			'~': resolve(__dirname, 'app'),
		},
	},
	css: {
		modules: {
			generateScopedName: '[name]_[local]_[hash:base64:5]',
		},
	},
})
