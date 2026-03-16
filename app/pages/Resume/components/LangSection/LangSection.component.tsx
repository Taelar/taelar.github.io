import { type FC } from 'react'
import type { LangFile } from '~/model/lang'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

interface LangSectionProps {
	langFile: LangFile
}

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
