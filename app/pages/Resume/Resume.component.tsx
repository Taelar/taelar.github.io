import { type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
import { Section } from '~/components/Section'
import { LinkedInLink } from '~/components/LinkedInLink'
import { Card } from '~/components/Card'
import { ProfilePicture } from '~/components/ProfilePicture'

const cx = classNames.bind(styles)

export const Resume: FC = () => {
	return (
		<main className={cx('main')}>
			<div className={cx('header')}>
				<div className={cx('nameAndContact')}>
					<p className={cx('subTitle')}>Développeur Front-end</p>
					<h1 className={cx('mainTitle')}>Thomas Esseul</h1>

					<div className={cx('contact')}>
						<Section title="Contact">
							<LinkedInLink />
						</Section>
					</div>
				</div>
				<ProfilePicture />
			</div>

			<div className={cx('content')}>
				<div className={cx('contentSubContainer')}>
					<Section title="Expériences">
						<>
							<Card
								leftTitle="Développeur Front-end"
								rightTitle="Follow Health | Rennes"
								subTitles={[
									'Depuis Sept 2021',
									'1 an (alternance) : Sept 2020 - Août 2021',
									'4 mois (stage): Mai 2020 - Août 2020',
								]}
								tags={[
									'React',
									'Typescript',
									'Sass',
									'Redux Sagas',
									'React-Query',
									'Jotai',
									'Gitlab CI',
									'Tiptap',
									'Nest.js',
									'Docker',
								]}
							>
								<span>
									Développement de fonctionnalités et corrections de bugs, UI
									design
								</span>
								<span>
									Entretien et modernisation de la codebase principale,
									notamment migration de Redux Sagas vers React-Query
								</span>
								<span>Amélioration des processus d&apos;équipe</span>
								<span>
									Développement d&apos;un éditeur de document avec plugins
									personnalisés
								</span>
								<span>
									Uniformisation et modernisation des outils de la stack
									front-end
								</span>
								<span>Optimisation et entretien de la CI</span>
								<span>Création de micro-service avec Nest.js</span>
							</Card>
							<Card
								leftTitle="Développeur Web"
								rightTitle="IMaR | Tralee, Irlande"
								subTitles={['3 mois (stage) : Avril 2018 - Juin 2018']}
								tags={['PHP', 'Laravel', 'SQL']}
							>
								<span>Développement d&apos;un site web e-commerce</span>
							</Card>
						</>
					</Section>

					<Section title="Langues">
						<div className={cx('languages')}>
							<Card leftTitle="Français">Langue Maternelle</Card>
							<Card leftTitle="Anglais">Courant</Card>
						</div>
					</Section>
				</div>
				<div className={cx('contentSubContainer')}>
					<Section title="Formation">
						<Card
							leftTitle="Master Informatique : Ingénierie Logicielle"
							subTitles={['2019 - 2021']}
						/>
						<Card
							leftTitle="Licence Informatique"
							subTitles={['2018 - 2019']}
						/>
						<Card
							leftTitle="DUT Informatique : Ingénierie Logicielle"
							subTitles={['2016 - 2018']}
						/>
					</Section>
					<Section title="Projets">
						<Card leftTitle="Gitlab Bot" subTitles={['Follow Health']}>
							<span>
								Notifications et automatisations liées aux outils de
								l&apos;équipe technique (Slack, Gitlab, Jira)
							</span>
						</Card>
						<Card leftTitle="Bot Discord" subTitles={['Projet personnel']}>
							<span>
								Bot pour un serveur privé servant à &quot;ajouter de
								l&apos;ambiance&quot;
							</span>
						</Card>
					</Section>
				</div>
			</div>
		</main>
	)
}
