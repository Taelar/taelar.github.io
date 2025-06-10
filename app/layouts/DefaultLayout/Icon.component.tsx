import React, { FC } from 'react'
import { IconProps } from './Icon.model'
import styles from './Icon.module.scss'
import * as IconLibrary from './assets'

export const Icon: FC<IconProps> = ({ icon }) => {
	const Component = IconLibrary[icon]
	return <Component className={styles['icon']} />
}
