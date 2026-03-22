import { type FC } from 'react'
import { Card } from '~/components/Card'
import type { LangFile } from '~/model/lang'

interface ExperiencesNextContentProps {
	langFile: LangFile
	className?: string
}

export const ExperiencesNextContent: FC<ExperiencesNextContentProps> = ({
	langFile,
	className,
}) => {
	return (
		<Card
			leftTitle={langFile.resume.experiences.imar.jobTitle}
			rightTitle={langFile.resume.experiences.imar.enterprise}
			subTitles={[langFile.resume.experiences.imar.periods.internship]}
			tags={['PHP', 'Laravel', 'SQL']}
			className={className}
		>
			<span className="">{langFile.resume.experiences.imar.content.cont1}</span>
		</Card>
	)
}
