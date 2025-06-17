import type { IconName } from '../Icon/Icon.model'

export type GroupOption<T> = {
	value: T
	label: string
	icon: IconName
}

export interface ButtonGroupProps<T> {
	value: T
	options: Array<GroupOption<T>>
	onSelect: (selected: GroupOption<T>) => void
}
