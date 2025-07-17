export const LANG_FILE_FR = {
	global: {
		description:
			"Bienvenue sur mon CV qui sert vaguement de portfolio, je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi.",
		jobTitle: 'Développeur Front-end',
		fullName: 'Thomas Esseul',
	},
	resume: {
		experiences: {
			title: 'Expériences',
			exp1: {
				jobTitle: 'Développeur Front-end',
				enterprise: 'Follow Health | Rennes',
				periods: {
					contract: '3 ans, 11 mois : Sept 2021 - Juillet 2025',
					apprenticeShip: '1 an (alternance) : Sept 2020 - Août 2021',
					internship: '4 mois (stage): Mai 2020 - Août 2020',
				},
				content: {
					cont1: 'Ajout de fonctionnalités, corrections de bugs, UI design',
					cont2: 'Entretien et modernisation de la codebase principale',
					cont3: 'Consignation, évaluation et réduction de la dette technique',
					cont4: "Participation à l'amélioration des processus d'équipe",
					cont5:
						"Développement d'un éditeur de document avec plugins personnalisés",
					cont6: 'Rendu de documents PDF dynamiques',
					cont7: 'Migration de Redux Sagas vers React-Query',
					cont8: 'Optimisation et entretien de la CI',
					cont9: 'Création de micro-service avec Nest.js',
				},
			},
			exp2: {
				jobTitle: 'Développeur Web',
				enterprise: 'IMaR | Tralee, Irlande',
				periods: {
					internship: '3 mois (stage) : Avril 2018 - Juin 2018',
				},
				content: {
					cont1: "Développement d'un site web e-commerce",
				},
			},
		},
		languages: {
			title: 'Langues',
			french: {
				title: 'Français',
				level: 'Langue Maternelle',
			},
			english: {
				title: 'Anglais',
				level: 'Courant',
			},
		},
		education: {
			title: 'Formation',
			educ1: {
				title: 'Master Informatique : Ingénierie Logicielle',
				period: '2019 - 2021',
			},
			educ2: {
				title: 'Licence Informatique',
				period: '2018 - 2019',
			},
			educ3: {
				title: 'DUT Informatique : Ingénierie Logicielle',
				period: '2016 - 2018',
			},
		},
		projects: {
			title: 'Projets',
			proj1: {
				title: 'Gitlab Bot',
				context: 'Follow Health',
				content:
					"Notifications et automatisations liées aux outils de l'équipe technique (Slack, Gitlab, Jira)",
			},
			proj2: {
				title: 'Discord Bot',
				context: 'Projet personnel',
				content: 'Bot pour un serveur privé servant à "ajouter de l\'ambiance"',
			},
		},
	},
}
