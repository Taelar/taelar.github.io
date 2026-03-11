import { type FC } from 'react'
import type { ReactNode } from 'react'
import styles from './Card.module.scss'
import Badge from './assets/badge.svg'

interface CardProps {
	leftTitle: string
	rightTitle?: string
	subTitles?: Array<string>
	children?: ReactNode
	tags?: Array<string>
}

export const Card: FC<CardProps> = ({
	leftTitle,
	rightTitle,
	subTitles,
	children,
	tags,
}) => {
	return (
		<div className={styles['card']}>
			<img className={styles['badge']} src={Badge} alt="" />
			<span className={styles['leftTitle']}>{leftTitle}</span>
			{rightTitle && <span className={styles['rightTitle']}>{rightTitle}</span>}
			{subTitles?.map((title, index) => (
				<span key={index} className={styles['subTitle']}>
					<i>{title}</i>
				</span>
			))}

			{children && <span className={styles['content']}>{children}</span>}
			{tags?.length && (
				<div className={styles['tags']}>
					{tags.map((tag, index) => (
						<span key={index} className={styles['tag']}>
							{tag}
						</span>
					))}
				</div>
			)}
		</div>
	)
}
