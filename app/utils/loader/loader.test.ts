import type { LoaderFunctionArgs } from 'react-router'
import { getLangFromContext } from './loader.utils'
import { describe, it, expect } from 'vitest'

describe('getLangFromContext', () => {
	it('should return "fr" if context has no language', () => {
		const context = {} as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return the language if present in context', () => {
		const context = { request: { url: '/en' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('en')
	})

	it('should handle context with undefined url', () => {
		const context = {
			request: { url: undefined },
		} as unknown as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should handle context with null url', () => {
		const context = { request: { url: null } } as unknown as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return "fr" if the url does not start with a supported lang', () => {
		const context = { request: { url: '/es/page' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return "en" if the url starts with /en', () => {
		const context = { request: { url: '/en/about' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('en')
	})

	it('should return "fr" if the url starts with /fr', () => {
		const context = { request: { url: '/fr/contact' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return "fr" if the url is just "/"', () => {
		const context = { request: { url: '/' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return "fr" if the url is empty string', () => {
		const context = { request: { url: '' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})

	it('should return "fr" if the url is malformed', () => {
		const context = { request: { url: 'not-a-url' } } as LoaderFunctionArgs
		expect(getLangFromContext(context)).toBe('fr')
	})
})
