import { type FC } from 'react'
import { type ExperiencesSectionProps } from './ExperiencesSection.model'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

export const ExperiencesSection: FC<ExperiencesSectionProps> = ({
	langFile,
}) => {
	return (
		<Section title={langFile.resume.experiences.title}>
			<>
				<Card
					leftTitle={langFile.resume.experiences.ovh.jobTitle}
					rightTitle={langFile.resume.experiences.ovh.enterprise}
					subTitles={[langFile.resume.experiences.ovh.periods.contract]}
					tags={['React', 'Typescript']}
				>
					<span>{langFile.resume.experiences.ovh.content.cont1}</span>
				</Card>
				<Card
					leftTitle={langFile.resume.experiences.follow.jobTitle}
					rightTitle={langFile.resume.experiences.follow.enterprise}
					subTitles={[
						langFile.resume.experiences.follow.periods.contract,
						langFile.resume.experiences.follow.periods.apprenticeShip,
						langFile.resume.experiences.follow.periods.internship,
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
					<span>{langFile.resume.experiences.follow.content.cont1}</span>
					<span>{langFile.resume.experiences.follow.content.cont2}</span>
					<span>{langFile.resume.experiences.follow.content.cont3}</span>
					<span>{langFile.resume.experiences.follow.content.cont4}</span>
					<span>{langFile.resume.experiences.follow.content.cont5}</span>
					<span>{langFile.resume.experiences.follow.content.cont6}</span>
					<span>{langFile.resume.experiences.follow.content.cont7}</span>
					<span>{langFile.resume.experiences.follow.content.cont8}</span>
					<span>{langFile.resume.experiences.follow.content.cont9}</span>
				</Card>
				<Card
					leftTitle={langFile.resume.experiences.imar.jobTitle}
					rightTitle={langFile.resume.experiences.imar.enterprise}
					subTitles={[langFile.resume.experiences.imar.periods.internship]}
					tags={['PHP', 'Laravel', 'SQL']}
				>
					<span>{langFile.resume.experiences.imar.content.cont1}</span>
				</Card>
			</>
		</Section>
	)
}
