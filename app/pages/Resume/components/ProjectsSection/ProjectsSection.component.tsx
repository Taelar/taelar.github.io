import { type FC } from 'react'
import { type ProjectsSectionProps } from './ProjectsSection.model'
import { Card } from '~/components/Card'
import { Section } from '~/components/Section'

export const ProjectsSection: FC<ProjectsSectionProps> = ({ langFile }) => {
	return (
		<Section title={langFile.resume.projects.title}>
			<Card
				leftTitle={langFile.resume.projects.gitlabbot.title}
				subTitles={[langFile.resume.projects.gitlabbot.context]}
				tags={['TODO']}
			>
				<span>{langFile.resume.projects.gitlabbot.content}</span>
			</Card>
			<Card
				leftTitle={langFile.resume.projects.discordbot.title}
				subTitles={[langFile.resume.projects.discordbot.context]}
				tags={['TODO']}
			>
				<span>{langFile.resume.projects.discordbot.content}</span>
			</Card>
			<Card
				leftTitle={langFile.resume.projects.resume.title}
				subTitles={[langFile.resume.projects.resume.context]}
				tags={['TODO']}
			>
				<span>{langFile.resume.projects.resume.content}</span>
			</Card>
		</Section>
	)
}
