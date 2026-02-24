import { useContext, type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
import { ProfilePicture } from '~/components/ProfilePicture'
import { ContactSection } from '~/components/ContactSection'
import { LangContext } from '~/context/Lang.context'
import {
	EducationSection,
	ExperiencesSection,
	LangSection,
	ProjectsSection,
} from './components'

const cx = classNames.bind(styles)

export const Resume: FC = () => {
	const { langFile } = useContext(LangContext)

	const { jobTitle, fullName } = langFile.global
	const pageTitle = `${fullName} - ${jobTitle}`

	return (
		<>
			<title>{pageTitle}</title>
			<meta name="description" content={langFile.global.description} />
			<section className={cx('main')}>
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

				<div className={cx('content')}>
					<div className={cx('contentSubContainer')}>
						<ExperiencesSection langFile={langFile} />
						<LangSection langFile={langFile} />
					</div>
					<div className={cx('contentSubContainer')}>
						<EducationSection langFile={langFile} />
						<ProjectsSection langFile={langFile} />
					</div>
				</div>
			</section>
		</>
	)
}
