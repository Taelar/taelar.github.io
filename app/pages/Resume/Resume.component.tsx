import { type FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'
// import RaccoonProfilePicture from './assets/profile_raccoon.jpg'
import ProfilePicture from './assets/profile.jpg'
import { Section } from '~/components/Section'
import { LinkedInLink } from '~/components/LinkedInLink'
import { Card } from '~/components/Card'

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

				<img className={cx('picture')} src={ProfilePicture} alt="Photo" />
			</div>

			<div className={cx('content')}>
				<div className={cx('contentSubContainer')}>
					<Section title="Expériences">
						<>
							<Card
								leftTitle="Développeur Front-end"
								rightTitle="Follow | Rennes"
								subTitle="2020 - Present"
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
									design.
								</span>
								<span>
									Entretien et modernisation de la codebase principale vieille
									de plus de 5 ans, notamment migration de Redux Sagas vers
									React-Query.
								</span>
								<span>Création de micro-service avec Nest.js.</span>
								<span>
									Développement d&apos;un éditeur de document avec plugins
									personnalisés.
								</span>
								<span>
									Uniformisation et modernisation des outils employés sur la
									stack front-end, notamment gestionnaire de styles et bundler.
								</span>
								<span>Optimisation et entretien de la CI</span>
							</Card>
							<Card
								leftTitle="Développeur Web"
								rightTitle="IMaR | Tralee, Irlande"
								subTitle="3 mois (stage) : Avril 2018 - Juin 2018"
								tags={['PHP', 'Laravel', 'SQL']}
							>
								<span>Développement d&apos;un site web e-commerce</span>
							</Card>
						</>
					</Section>
				</div>
				<div className={cx('contentSubContainer')}>
					<Section title="Formation">
						<Card
							leftTitle="Master Informatique, Ingénierie Logicielle"
							subTitle="2019 - 2021"
						/>
						<Card leftTitle="Licence Informatique" subTitle="2018 - 2019" />
						<Card leftTitle="DUT Informatique" subTitle="2016 - 2018" />
					</Section>
					<Section title="Langues">
						<Card leftTitle="Français">Langue Maternelle</Card>
						<Card leftTitle="Anglais">Courant</Card>
					</Section>
				</div>
			</div>
		</main>
	)
}
