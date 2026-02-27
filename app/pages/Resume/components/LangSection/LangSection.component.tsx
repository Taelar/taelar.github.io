import { type FC } from 'react'
import { type LangSectionProps } from './LangSection.model'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

export const LangSection: FC<LangSectionProps> = ({ langFile }) => {
	return (
		<Section title={langFile.resume.languages.title}>
			<Card leftTitle={langFile.resume.languages.french.title}>
				{langFile.resume.languages.french.level}
			</Card>
			<Card leftTitle={langFile.resume.languages.english.title}>
				{langFile.resume.languages.english.level}
			</Card>
		</Section>
	)
}
