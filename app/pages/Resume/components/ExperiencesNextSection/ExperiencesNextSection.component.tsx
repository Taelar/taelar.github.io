import { type FC } from 'react'
import type { LangFile } from '~/model/lang'
import { Section } from '~/components/Section'
import { ExperiencesNextContent } from './ExperiencesNextContent.component'
import classNames from 'classnames/bind'
import styles from './ExperiencesNextSection.module.scss'

const cx = classNames.bind(styles)

interface ExperiencesNextSectionProps {
	langFile: LangFile
}

export const ExperiencesNextSection: FC<ExperiencesNextSectionProps> = ({
	langFile,
}) => {
	return (
		<Section
			className={cx('section')}
			title={langFile.resume.experiences.titleNext}
		>
			<ExperiencesNextContent langFile={langFile} />
		</Section>
	)
}
