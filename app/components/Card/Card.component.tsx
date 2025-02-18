import { type FC } from 'react'
import { type CardProps } from './Card.model'
import styles from './Card.module.scss'

export const Card: FC<CardProps> = ({
	leftTitle,
	rightTitle,
	subTitle,
	children,
	tags,
}) => {
	return (
		<div className={styles['card']}>
			<span className={styles['leftTitle']}>{leftTitle}</span>
			{rightTitle && <span className={styles['rightTitle']}>{rightTitle}</span>}
			{subTitle && (
				<span className={styles['subTitle']}>
					<i>{subTitle}</i>
				</span>
			)}
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
