import { useContext, type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
import { LangContext } from '~/context/Lang.context'
import {
	EducationSection,
	ExperiencesNextSection,
	ExperiencesSection,
	Header,
	LangSection,
	ProjectsSection,
	WhatILikeSection,
} from './components'
import { DocumentPage } from '~/components/DocumentPage'
import { ContactSection } from '~/components/ContactSection'

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
				<DocumentPage layout="header" className={cx('page')}>
					<Header langFile={langFile} />
					<div className={cx('content')}>
						<div className={cx('contentSubContainer')}>
							<ExperiencesSection langFile={langFile} />
						</div>
						<div className={cx('contentSubContainer')}>
							<EducationSection langFile={langFile} />
							<LangSection langFile={langFile} />
						</div>
					</div>
				</DocumentPage>
				<DocumentPage layout="footer" className={cx('secondPage')}>
					<div className={cx('content')}>
						<div className={cx('contentSubContainer')}>
							<ExperiencesNextSection langFile={langFile} />
							<ProjectsSection langFile={langFile} />
						</div>
						<WhatILikeSection langFile={langFile} />
					</div>
					<div className={cx('footerContact')}>
						<p className={cx('name')}>{langFile.global.fullName}</p>
						<ContactSection />
					</div>
				</DocumentPage>
			</section>
		</>
	)
}
