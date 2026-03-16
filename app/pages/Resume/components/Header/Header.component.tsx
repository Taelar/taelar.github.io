import { type FC } from 'react'
import type { LangFile } from '~/model/lang'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { ContactSection } from '~/components/ContactSection'
import { ProfilePicture } from '~/components/ProfilePicture'

const cx = classNames.bind(styles)

interface HeaderProps {
	langFile: LangFile
}

export const Header: FC<HeaderProps> = ({ langFile }) => {
	return (
		<div className={cx('header')}>
			<div className={cx('nameAndContact')}>
				<p className={cx('subTitle')}>{langFile.global.jobTitle}</p>
				<h1 className={cx('mainTitle')}>{langFile.global.fullName}</h1>
				<div className={cx('contact')}>
					<ContactSection />
				</div>
			</div>
			<ProfilePicture />
		</div>
	)
}
