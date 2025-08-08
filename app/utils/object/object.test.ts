import { isDefined } from './object.utils'
import { describe, it, expect } from 'vitest'

describe('isDefined', () => {
	it('should return true for non-null and non-undefined values', () => {
		expect(isDefined(0)).toBe(true)
		expect(isDefined('')).toBe(true)
		expect(isDefined(false)).toBe(true)
		expect(isDefined([])).toBe(true)
		expect(isDefined({})).toBe(true)
		expect(isDefined(NaN)).toBe(true)
	})

	it('should return false for undefined', () => {
		expect(isDefined(undefined)).toBe(false)
	})

	it('should return false for null', () => {
		expect(isDefined(null)).toBe(false)
	})
})
