import { isEqual, reduce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { isDefined } from '~/utils/object'

type Filters = Record<string, unknown>

export const useSearchParamsState = <T extends Filters>(
	initialFilters: T,
): [T, (filters: T) => void] => {
	const [searchParams, setSearchParams] = useSearchParams()

	const formattedSearchParams = useMemo((): Filters => {
		const formattedSearchParams: Filters = {}

		for (const [key, value] of searchParams.entries()) {
			if (isDefined(formattedSearchParams[key])) {
				const prevValue: Array<unknown> = Array.isArray(
					formattedSearchParams[key],
				)
					? [...formattedSearchParams[key]]
					: [formattedSearchParams[key]]
				formattedSearchParams[key] = [...prevValue, value]
			} else {
				formattedSearchParams[key] = value
			}
		}

		return formattedSearchParams
	}, [searchParams])

	const isManagedFilter = useCallback(
		(key: string) => key in initialFilters,
		[initialFilters],
	)

	const initialValueHasChange = useCallback(
		(key: string, value: unknown) => !isEqual(value, initialFilters[key]),
		[initialFilters],
	)

	const searchParamsFilters = useMemo((): T => {
		const searchParamsFilters = Object.keys(formattedSearchParams)
			.filter(isManagedFilter)
			.reduce<Filters>((acc, key) => {
				acc[key] = formattedSearchParams[key]
				return acc
			}, {})

		return { ...initialFilters, ...searchParamsFilters }
	}, [formattedSearchParams, isManagedFilter, initialFilters])

	const setSearchParamsFilters = useCallback(
		(filters: T): void =>
			setSearchParams(
				() => {
					return reduce(
						{
							...formattedSearchParams,
							...filters,
						},
						function (acc, value, key) {
							return !isManagedFilter(key) ||
								(isManagedFilter(key) && initialValueHasChange(key, value))
								? { ...acc, [key]: value }
								: acc
						},
						[],
					)
				},
				{ replace: true },
			),
		[
			setSearchParams,
			formattedSearchParams,
			isManagedFilter,
			initialValueHasChange,
		],
	)

	return [searchParamsFilters, setSearchParamsFilters]
}
