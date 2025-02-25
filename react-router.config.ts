import type { Config } from '@react-router/dev/config'

export default {
	ssr: false,
	buildDirectory: 'dist',
	// Ajouter ici les routes qui doivent générer statiquement au moment du build
	async prerender() {
		return ['/']
	},
} satisfies Config
