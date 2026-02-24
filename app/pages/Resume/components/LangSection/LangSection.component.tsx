import { type FC } from 'react'
import { type LangSectionProps } from './LangSection.model'
import { Card } from '~/components/Card'
import styles from './LangSection.module.scss'
import { Section } from '~/components/Section'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const LangSection: FC<LangSectionProps> = ({ langFile }) => {
	return (
		<Section title={langFile.resume.languages.title}>
			<div className={cx('languages')}>
				<Card leftTitle={langFile.resume.languages.french.title}>
					{langFile.resume.languages.french.level}
				</Card>
				<Card leftTitle={langFile.resume.languages.english.title}>
					{langFile.resume.languages.english.level}
				</Card>
			</div>
		</Section>
	)
}
