import { type FC } from 'react'
import { type SocialLinkProps } from './SocialLink.model'
import styles from './SocialLink.module.scss'
import { Icon } from '../Icon'

export const SocialLink: FC<SocialLinkProps> = ({ icon, label, link }) => {
	return (
		<a
			href={link}
			target="_blank"
			className={styles['socialLink']}
			rel="noreferrer"
		>
			<Icon icon={icon} />
			<span>{label}</span>
		</a>
	)
}
