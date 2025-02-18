import { type FC } from 'react'
import { LinkedInLogo } from './assets/LinkedInLogo.component'
import styles from './LinkedInLink.module.scss'

export const LinkedInLink: FC = () => {
	return (
		<a
			href="https://www.linkedin.com/in/thomas-esseul-4830a4153/"
			target="_blank"
			className={styles['socialLink']}
			rel="noreferrer"
		>
			<LinkedInLogo />
			<span>Thomas Esseul</span>
		</a>
	)
}
