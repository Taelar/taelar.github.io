import { type FC } from 'react'
import type { IconName } from '../Icon/Icon.component'
import styles from './SocialLink.module.scss'
import { Icon } from '../Icon'

interface SocialLinkProps {
	icon: IconName
	label: string
	link: string
}

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
