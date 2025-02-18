import { type FC } from 'react'
import { type SocialLinkProps } from './SocialLink.model'
import styles from './SocialLink.module.scss'
import { GithubLogo } from './assets/GithubLogo.component'
import { LinkedInLogo } from './assets/LinkedInLogo.component'

export const SocialLink: FC<SocialLinkProps> = ({ icon, label, link }) => {
	return (
		<a
			href={link}
			target="_blank"
			className={styles['socialLink']}
			rel="noreferrer"
		>
			{icon === 'github' && <GithubLogo />}
			{icon === 'linkedin' && <LinkedInLogo />}
			<span>{label}</span>
		</a>
	)
}
