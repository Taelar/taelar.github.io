import React, { type FC } from 'react'
import styles from './Icon.module.scss'
import * as IconLibrary from './assets'
import classNames from 'classnames'

export type IconName = keyof typeof IconLibrary
export type IconSubSet<T> = T extends IconName ? T : never

interface IconProps {
	icon: IconName
	additionnalClassNames?: string
}

export const Icon: FC<IconProps> = ({ icon, additionnalClassNames }) => {
	const Component = IconLibrary[icon]
	return (
		<Component className={classNames(styles['icon'], additionnalClassNames)} />
	)
}
