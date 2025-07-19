import type { IconName } from '../Icon/Icon.model'

type BaseGroupOption = {
	label: string
}

type LabelGroupOption<T> = BaseGroupOption & {
	value: T
}

type UrlGroupOption = BaseGroupOption & {
	url: string
}

type IntermediaryGroupOption<T> = LabelGroupOption<T> | UrlGroupOption

type IconGroupOption<T> = IntermediaryGroupOption<T> & {
	icon: IconName
}

type TextGroupOption<T> = IntermediaryGroupOption<T> & {
	text: string
}

export type GroupOption<T> = IconGroupOption<T> | TextGroupOption<T>

export interface ButtonGroupProps<T> {
	value: T
	options: Array<GroupOption<T>>
	onSelect?: (selected: GroupOption<T>) => void
}
