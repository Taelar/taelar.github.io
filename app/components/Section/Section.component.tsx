import type { FC } from 'react'
import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
	title: string
	children?: ReactNode
}

export const Section: FC<SectionProps> = ({ title, children }) => {
	return (
		<div>
			<h3 className={styles['title']}>{title}</h3>
			<div className={styles['content']}>{children}</div>
		</div>
	)
}
