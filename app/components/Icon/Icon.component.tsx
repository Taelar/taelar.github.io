import React, { type FC } from 'react'
import { type IconProps } from './Icon.model'
import styles from './Icon.module.scss'
import * as IconLibrary from './assets'
import classNames from 'classnames'

export const Icon: FC<IconProps> = ({ icon, additionnalClassNames }) => {
	const Component = IconLibrary[icon]
	return (
		<Component className={classNames(styles['icon'], additionnalClassNames)} />
	)
}
