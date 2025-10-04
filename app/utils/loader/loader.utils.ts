import { type LoaderFunctionArgs } from 'react-router'
import {
	DEFAULT_LANGUAGE,
	type SupportedLangKeys,
	SUPPORTED_LANG_KEYS,
} from '~/model/lang'

const urlRegex = /^(?:https?:\/\/)?[\w+.:]*\/(\w+)[\w/]*/

export const getLangFromContext = (args: LoaderFunctionArgs) => {
	let lang = DEFAULT_LANGUAGE

	try {
		const { url } = args.request
		const match = url.match(urlRegex)
		const parsedLang = match?.at(1) as SupportedLangKeys | undefined

		if (parsedLang && SUPPORTED_LANG_KEYS.includes(parsedLang)) {
			lang = parsedLang
		}
	} catch {
		// Intentionally left empty: fallback to DEFAULT_LANGUAGE
	}

	return lang
}
