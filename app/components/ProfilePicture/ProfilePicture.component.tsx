import type { FC } from 'react'
import styles from './ProfilePicture.module.scss'
// import RaccoonProfilePicture from './assets/profile_raccoon.jpg'
import Picture from './assets/profile.jpg'
import Badge from './assets/badge.svg'

export const ProfilePicture: FC = () => {
	return (
		<div className={styles['container']}>
			<img className={styles['picture']} src={Picture} alt="Thomas Esseul" />
			<img className={styles['badge']} src={Badge} alt="" />
		</div>
	)
}
