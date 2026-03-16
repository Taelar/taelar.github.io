import { type FC } from 'react'
import type { LangFile } from '~/model/lang'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

interface EducationSectionProps {
	langFile: LangFile
}

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
