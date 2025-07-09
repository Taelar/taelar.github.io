export const SUPPORTED_LANG_KEYS = ['fr', 'en'] as const

export type SupportedLangKeys = (typeof SUPPORTED_LANG_KEYS)[number]

export const DEFAULT_LANGUAGE: SupportedLangKeys = 'fr'
