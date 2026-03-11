import { type FC } from 'react'
import { type WhatILikeSectionProps } from './WhatILikeSection.model'
import { Section } from '~/components/Section/Section.component'
import { Card } from '~/components/Card'

export const WhatILikeSection: FC<WhatILikeSectionProps> = ({ langFile }) => {
	return (
		<Section title={langFile.resume.whatilike.title}>
			<Card leftTitle={langFile.resume.whatilike.architecture.title}>
				<span>{langFile.resume.whatilike.architecture.content}</span>
			</Card>
			<Card leftTitle={langFile.resume.whatilike.teamwork.title}>
				<span>{langFile.resume.whatilike.teamwork.content}</span>
			</Card>
			<Card leftTitle={langFile.resume.whatilike.problems.title}>
				<span>{langFile.resume.whatilike.problems.content}</span>
			</Card>
			<Card leftTitle={langFile.resume.whatilike.detail.title}>
				<span>{langFile.resume.whatilike.detail.content}</span>
			</Card>
		</Section>
	)
}
