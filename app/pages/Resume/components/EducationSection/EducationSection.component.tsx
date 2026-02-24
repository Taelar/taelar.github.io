import { type FC } from 'react'
import { type EducationSectionProps } from './EducationSection.model'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

export const EducationSection: FC<EducationSectionProps> = ({ langFile }) => {
	return (
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
	)
}
