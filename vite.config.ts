import { reactRouter } from '@react-router/dev/vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		reactRouter(),
		tsconfigPaths(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
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
	optimizeDeps: {
		exclude: ['three'],
	},
})
