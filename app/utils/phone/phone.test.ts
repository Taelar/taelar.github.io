/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it, expect } from 'vitest'
import { formatPhoneNumber, getIntlPhoneNumber } from './phone.utils'

describe('getIntlPhoneNumber', () => {
	it('should extract core number from +33 prefix', () => {
		expect(getIntlPhoneNumber('+33612345678')).toBe('612345678')
	})

	it('should extract core number from 0 prefix', () => {
		expect(getIntlPhoneNumber('0612345678')).toBe('612345678')
	})

	it('should handle numbers with spaces', () => {
		expect(getIntlPhoneNumber('06 12 34 56 78')).toBe('612345678')
	})

	it('should return null for too short number', () => {
		expect(getIntlPhoneNumber('061234567')).toBeNull()
	})

	it('should return null for too long number', () => {
		expect(getIntlPhoneNumber('061234567890')).toBeNull()
	})

	it('should return null for invalid prefix', () => {
		expect(getIntlPhoneNumber('1512345678')).toBeNull()
	})

	it('should return null for letters in number', () => {
		expect(getIntlPhoneNumber('06A2345678')).toBeNull()
	})

	it('should return null for empty string', () => {
		expect(getIntlPhoneNumber('')).toBeNull()
	})

	it('should return null for undefined', () => {
		// @ts-expect-error
		expect(getIntlPhoneNumber(undefined)).toBeNull()
	})

	it('should return null for null', () => {
		// @ts-expect-error
		expect(getIntlPhoneNumber(null)).toBeNull()
	})
})

describe('formatPhoneNumber', () => {
	it('should format valid French number (0 prefix) to fr', () => {
		expect(formatPhoneNumber('0612345678', 'fr')).toEqual({
			normalized: '+33612345678',
			formated: '06 12 34 56 78',
		})
	})

	it('should format valid French number (0 prefix) to intl', () => {
		expect(formatPhoneNumber('0612345678', 'intl')).toEqual({
			normalized: '+33612345678',
			formated: '+33 6 12 34 56 78',
		})
	})

	it('should format valid French number (+33 prefix) to fr', () => {
		expect(formatPhoneNumber('+33612345678', 'fr')).toEqual({
			normalized: '+33612345678',
			formated: '06 12 34 56 78',
		})
	})

	it('should format valid French number with spaces', () => {
		expect(formatPhoneNumber('06 12 34 56 78', 'intl')).toEqual({
			normalized: '+33612345678',
			formated: '+33 6 12 34 56 78',
		})
	})

	it('should return null for invalid number (too short)', () => {
		expect(formatPhoneNumber('061234567', 'fr')).toBeNull()
	})

	it('should return null for invalid number (letters)', () => {
		expect(formatPhoneNumber('06A2345678', 'intl')).toBeNull()
	})

	it('should return null for invalid prefix', () => {
		expect(formatPhoneNumber('1512345678', 'fr')).toBeNull()
	})

	it('should return null for empty string', () => {
		expect(formatPhoneNumber('', 'fr')).toBeNull()
	})

	it('should return null for undefined', () => {
		// @ts-expect-error
		expect(formatPhoneNumber(undefined, 'fr')).toBeNull()
	})

	it('should return null for null', () => {
		// @ts-expect-error
		expect(formatPhoneNumber(null, 'fr')).toBeNull()
	})
})
