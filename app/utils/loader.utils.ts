import { type LoaderFunctionArgs } from 'react-router'
import {
	DEFAULT_LANGUAGE,
	type SupportedLangKeys,
	SUPPORTED_LANG_KEYS,
} from '~/model/lang'

export const getLangFromContext = (args: LoaderFunctionArgs) => {
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

	return lang
}
