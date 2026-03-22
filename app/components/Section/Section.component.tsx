import type { FC } from 'react'
import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
	title: string
	children?: ReactNode
	className?: string
}

export const Section: FC<SectionProps> = ({ title, children, className }) => {
	return (
		<div className={className}>
			<h3 className={styles['title']}>{title}</h3>
			<div className={styles['content']}>{children}</div>
		</div>
	)
}
