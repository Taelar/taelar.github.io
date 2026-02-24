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
					subTitles={[langFile.resume.experiences.exp2.periods.internship]}
					tags={['PHP', 'Laravel', 'SQL']}
				>
					<span>{langFile.resume.experiences.exp2.content.cont1}</span>
				</Card>
			</>
		</Section>
	)
}
