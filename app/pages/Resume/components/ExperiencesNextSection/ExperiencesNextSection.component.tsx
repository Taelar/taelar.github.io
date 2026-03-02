import { type FC } from 'react'
import { type ExperiencesNextSectionProps } from './ExperiencesNextSection.model'
import { Section } from '~/components/Section'
import { Card } from '~/components/Card'

export const ExperiencesNextSection: FC<ExperiencesNextSectionProps> = ({
	langFile,
}) => {
	return (
		<Section title={langFile.resume.experiences.titleNext}>
			<Card
				leftTitle={langFile.resume.experiences.imar.jobTitle}
				rightTitle={langFile.resume.experiences.imar.enterprise}
				subTitles={[langFile.resume.experiences.imar.periods.internship]}
				tags={['PHP', 'Laravel', 'SQL']}
			>
				<span>{langFile.resume.experiences.imar.content.cont1}</span>
			</Card>
		</Section>
	)
}
