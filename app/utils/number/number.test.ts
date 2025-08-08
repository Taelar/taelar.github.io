import { describe, it, expect } from 'vitest'
import { randInt } from './number.utils'

describe('randInt', () => {
	it('should always return a number between min (inclusive) and min + max (exclusive)', () => {
		const min = 5
		const max = 10
		for (let i = 0; i < 100; i++) {
			const result = randInt(min, max)
			expect(result).toBeGreaterThanOrEqual(min)
			expect(result).toBeLessThan(min + max)
		}
	})

	it('should return min when max is 0', () => {
		expect(randInt(7, 0)).toBe(7)
	})

	it('should handle negative min', () => {
		const min = -10
		const max = 5
		for (let i = 0; i < 100; i++) {
			const result = randInt(min, max)
			expect(result).toBeGreaterThanOrEqual(min)
			expect(result).toBeLessThan(min + max)
		}
	})
})
