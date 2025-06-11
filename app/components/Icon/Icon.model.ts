import * as IconLibrary from './assets'

export type IconName = keyof typeof IconLibrary
export type IconSubSet<T> = T extends IconName ? T : never

export interface IconProps {
	icon: IconName
	additionnalClassNames?: string
}
