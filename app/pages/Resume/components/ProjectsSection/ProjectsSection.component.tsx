import { type FC } from 'react'
import { type ProjectsSectionProps } from './ProjectsSection.model'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

export const ProjectsSection: FC<ProjectsSectionProps> = ({ langFile }) => {
	return (
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
	)
}
