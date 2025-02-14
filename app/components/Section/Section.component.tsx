import type { FC } from 'react'
import type { SectionProps } from './Section.model'
import styles from './Section.module.scss'

export const Section: FC<SectionProps> = ({ title, children }) => {
	return (
		<div>
			<h2 className={styles['title']}>{title}</h2>
			<div className={styles['content']}>{children}</div>
		</div>
	)
}
