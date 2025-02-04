import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import onlyWarn from 'eslint-plugin-only-warn'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ ignores: ['dist/*', '.react-router/*'] },
	{ languageOptions: { globals: globals.browser } },
	{
		settings: {
			react: {
				version: 'detect',
				defaultVersion: '19',
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: { onlyWarn },
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},
]
