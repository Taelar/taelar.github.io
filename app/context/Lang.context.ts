import { createContext } from 'react'
import {
	DEFAULT_LANGUAGE,
	LANG_FILES,
	type LangFile,
	type SupportedLangKeys,
} from '~/model/lang'

interface LangContext {
	langKey: SupportedLangKeys
	langFile: LangFile
}

export const LangContext = createContext<LangContext>({
	langKey: DEFAULT_LANGUAGE,
	langFile: LANG_FILES[DEFAULT_LANGUAGE],
})
