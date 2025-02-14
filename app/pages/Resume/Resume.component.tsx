import { type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
// import RaccoonProfilePicture from './assets/profile_raccoon.jpg'
import ProfilePicture from './assets/profile.jpg'
import { Section } from '~/components/Section'
import { LinkedInLink } from '~/components/LinkedInLink'

const cx = classNames.bind(styles)

export const Resume: FC = () => {
	return (
		<main className={cx('main')}>
			<div className={cx('header')}>
				<div className={cx('nameAndContact')}>
					<p className={cx('subTitle')}>Développeur Front-end</p>
					<h1 className={cx('mainTitle')}>Thomas Esseul</h1>

					<div className={cx('contact')}>
						<Section title="Contact">
							<LinkedInLink />
						</Section>
					</div>
				</div>

				<img className={cx('picture', '')} src={ProfilePicture} alt="Photo" />
			</div>
			Consectetur eiusmod culpa fugiat ad. Labore consequat elit minim excepteur
			labore sint. Ea enim cupidatat et duis sunt ex do nisi laborum ex officia
			Lorem sit. Eu voluptate in cillum est tempor nostrud velit. Ullamco
			consectetur laborum laboris tempor sint ipsum aliqua in sunt. Ut ad qui
			amet tempor sit magna magna occaecat proident dolor ut deserunt proident
			consectetur. Non nisi cillum eiusmod commodo consequat exercitation dolor
			velit est culpa minim sunt veniam cupidatat.
		</main>
	)
}
