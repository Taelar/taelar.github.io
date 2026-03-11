import React, { FC } from 'react'
import styles from './Icon.module.scss'
import * as IconLibrary from './assets'

type IconName = keyof typeof IconLibrary

interface IconProps {
	icon: IconName
}

export const Icon: FC<IconProps> = ({ icon }) => {
	const Component = IconLibrary[icon]
	return <Component className={styles['icon']} />
}
