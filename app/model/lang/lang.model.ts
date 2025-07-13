import { LANG_FILE_EN } from './en.lang'
import { LANG_FILE_FR } from './fr.lang'

export const SUPPORTED_LANG_KEYS = ['fr', 'en'] as const
export type SupportedLangKeys = (typeof SUPPORTED_LANG_KEYS)[number]

export const DEFAULT_LANGUAGE: SupportedLangKeys = 'fr'

export type LangFile = typeof LANG_FILE_FR

export const LANG_FILES: Record<SupportedLangKeys, LangFile> = {
	fr: LANG_FILE_FR,
	en: LANG_FILE_EN,
}
