/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it, expect } from 'vitest'
import {
	formatPhoneNumber,
	getIntlPhoneNumber,
	phoneRegex,
} from './phone.utils'

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

describe('phoneRegex', () => {
	it('should match valid French number with 0 prefix', () => {
		const match = '0612345678'.match(phoneRegex)
		expect(match).not.toBeNull()
		expect(match?.[1]).toBe('0')
		expect(match?.[2]).toBe('612345678')
	})

	it('should match valid French number with "0" prefix', () => {
		const match = '0612345678'.match(phoneRegex)
		expect(match).not.toBeNull()
		expect(match?.[1]).toBe('0')
		expect(match?.[2]).toBe('612345678')
	})

	it('should match valid number with 1-digit prefix (+7)', () => {
		const match = '+7612345678'.match(phoneRegex)
		expect(match).not.toBeNull()
		expect(match?.[1]).toBe('+7')
		expect(match?.[2]).toBe('612345678')
	})

	it('should match valid number with 2-digit prefix (+33)', () => {
		const match = '+33612345678'.match(phoneRegex)
		expect(match).not.toBeNull()
		expect(match?.[1]).toBe('+33')
		expect(match?.[2]).toBe('612345678')
	})

	it('should not match number with invalid prefix', () => {
		expect('1512345678'.match(phoneRegex)).toBeNull()
	})

	it('should not match number with too few digits', () => {
		expect('061234567'.match(phoneRegex)).toBeNull()
	})

	it('should not match number with too many digits', () => {
		expect('06123456789'.match(phoneRegex)).toBeNull()
	})

	it('should not match number with letters', () => {
		expect('06A2345678'.match(phoneRegex)).toBeNull()
	})

	it('should not match empty string', () => {
		expect(''.match(phoneRegex)).toBeNull()
	})
})
