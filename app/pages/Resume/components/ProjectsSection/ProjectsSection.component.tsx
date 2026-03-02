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
				tags={[
					'Gitlab API',
					'Slack API',
					'Jira API',
					'Firebase Functions',
					'Firestore',
					'Typescript',
				]}
			>
				<span>{langFile.resume.projects.gitlabbot.content.cont1}</span>
				<span>{langFile.resume.projects.gitlabbot.content.cont2}</span>
				<span>{langFile.resume.projects.gitlabbot.content.cont3}</span>
			</Card>
			<Card
				leftTitle={langFile.resume.projects.discordbot.title}
				subTitles={[langFile.resume.projects.discordbot.context]}
				tags={['Discord JS', 'Fly.io', 'Typescript']}
			>
				<span>{langFile.resume.projects.discordbot.content.cont1}</span>
				<span>{langFile.resume.projects.discordbot.content.cont2}</span>
			</Card>
			<Card
				leftTitle={langFile.resume.projects.resume.title}
				subTitles={[langFile.resume.projects.resume.context]}
				tags={[
					'React',
					'React-router Framework',
					'Github Actions',
					'Typescript',
					'Sass/Scss',
				]}
			>
				<span>{langFile.resume.projects.resume.content.cont1}</span>
				<span>{langFile.resume.projects.resume.content.cont2}</span>
			</Card>
		</Section>
	)
}
