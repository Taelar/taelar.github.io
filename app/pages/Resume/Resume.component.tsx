import { type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
import { Section } from '~/components/Section'
import { Card } from '~/components/Card'
import { ProfilePicture } from '~/components/ProfilePicture'
import { SocialLink } from '~/components/SocialLink'
import { WaterCanvas } from '~/components/WaterCanvas'

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
							<div className={cx('contactLine')}>
								<SocialLink
									icon="linkedin"
									label="Thomas Esseul"
									link="https://www.linkedin.com/in/thomas-esseul-4830a4153/"
								/>
								<SocialLink
									icon="github"
									label="Taelar"
									link="https://github.com/Taelar"
								/>
								<SocialLink
									icon="website"
									label="taelar.github.io"
									link="https://taelar.github.io/"
								/>
							</div>
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
									Ajout de fonctionnalités, corrections de bugs, UI design
								</span>
								<span>
									Entretien et modernisation de la codebase principale
								</span>
								<span>
									Consignation, évaluation et réduction de la dette technique
								</span>
								<span>
									Participation à l&apos;amélioration des processus
									d&apos;équipe
								</span>
								<span>
									Développement d&apos;un éditeur de document avec plugins
									personnalisés
								</span>
								<span>Rendu de documents PDF dynamiques</span>
								<span>Migration de Redux Sagas vers React-Query</span>
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
			<WaterCanvas />
		</main>
	)
}
