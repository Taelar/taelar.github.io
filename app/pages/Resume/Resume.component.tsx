import { useContext, type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
import { Section } from '~/components/Section'
import { Card } from '~/components/Card'
import { ProfilePicture } from '~/components/ProfilePicture'
import { ContactSection } from '~/components/ContactSection'
import { LangContext } from '~/context/Lang.context'

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
						<Section title={langFile.resume.experiences.title}>
							<>
								<Card
									leftTitle={langFile.resume.experiences.exp1.jobTitle}
									rightTitle={langFile.resume.experiences.exp1.enterprise}
									subTitles={[
										langFile.resume.experiences.exp1.periods.contract,
										langFile.resume.experiences.exp1.periods.apprenticeShip,
										langFile.resume.experiences.exp1.periods.internship,
									]}
									tags={[
										'React',
										'Typescript',
										'Sass',
										'Redux Sagas',
										'React-Query',
										'Jotai',
										'Gitlab CI',
										'Tiptap',
										'Nest.js',
										'Docker',
									]}
								>
									<span>{langFile.resume.experiences.exp1.content.cont1}</span>
									<span>{langFile.resume.experiences.exp1.content.cont2}</span>
									<span>{langFile.resume.experiences.exp1.content.cont3}</span>
									<span>{langFile.resume.experiences.exp1.content.cont4}</span>
									<span>{langFile.resume.experiences.exp1.content.cont5}</span>
									<span>{langFile.resume.experiences.exp1.content.cont6}</span>
									<span>{langFile.resume.experiences.exp1.content.cont7}</span>
									<span>{langFile.resume.experiences.exp1.content.cont8}</span>
									<span>{langFile.resume.experiences.exp1.content.cont9}</span>
								</Card>
								<Card
									leftTitle={langFile.resume.experiences.exp2.jobTitle}
									rightTitle={langFile.resume.experiences.exp2.enterprise}
									subTitles={[
										langFile.resume.experiences.exp2.periods.internship,
									]}
									tags={['PHP', 'Laravel', 'SQL']}
								>
									<span>{langFile.resume.experiences.exp2.content.cont1}</span>
								</Card>
							</>
						</Section>

						<Section title={langFile.resume.languages.title}>
							<div className={cx('languages')}>
								<Card leftTitle={langFile.resume.languages.french.title}>
									{langFile.resume.languages.french.level}
								</Card>
								<Card leftTitle={langFile.resume.languages.english.title}>
									{langFile.resume.languages.english.level}
								</Card>
							</div>
						</Section>
					</div>
					<div className={cx('contentSubContainer')}>
						<Section title={langFile.resume.education.title}>
							<Card
								leftTitle={langFile.resume.education.educ1.title}
								subTitles={[langFile.resume.education.educ1.period]}
							/>
							<Card
								leftTitle={langFile.resume.education.educ2.title}
								subTitles={[langFile.resume.education.educ2.period]}
							/>
							<Card
								leftTitle={langFile.resume.education.educ3.title}
								subTitles={[langFile.resume.education.educ3.period]}
							/>
						</Section>
						<Section title={langFile.resume.projects.title}>
							<Card
								leftTitle={langFile.resume.projects.proj1.title}
								subTitles={[langFile.resume.projects.proj1.context]}
							>
								<span>{langFile.resume.projects.proj1.content}</span>
							</Card>
							<Card
								leftTitle={langFile.resume.projects.proj2.title}
								subTitles={[langFile.resume.projects.proj2.context]}
							>
								<span>{langFile.resume.projects.proj2.content}</span>
							</Card>
						</Section>
					</div>
				</div>
			</section>
		</>
	)
}
