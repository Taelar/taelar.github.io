export const LANG_FILE_FR = {
	global: {
		description:
			"Bienvenue sur mon CV qui sert vaguement de portfolio, je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi.",
		jobTitle: 'Développeur Front-end',
		fullName: 'Thomas Esseul',
	},
	layout: {
		githubRepo: 'Dépôt Github',
		background: {
			water: {
				title: 'Style de fond : Eau',
				select: {
					title: 'Fréquence des ondulations',
					chaos: 'Chaos',
					fast: 'Rapide',
					medium: 'Moyen',
					slow: 'Lent',
				},
			},
			triangles: {
				title: 'Style de fond : Triangles',
			},
		},
	},
	resume: {
		experiences: {
			title: 'Expériences',
			titleNext: 'Expériences (Suite)',
			ovh: {
				jobTitle: 'Ingénieur Front-end Senior',
				enterprise: 'OVHCloud | Rennes',
				periods: {
					contract: 'Depuis Novembre 2025',
				},
				content: {
					cont1:
						"Enrichissement de l'interface du produit Kubernetes managé (Public Cloud)",
					cont2: 'Développement assisté par IA (Cursor, Claude Code)',
					cont3:
						"Mise en place d'architecture hexagonale dans un projet historique",
				},
			},
			follow: {
				jobTitle: 'Développeur Front-end',
				enterprise: 'Follow Health | Rennes',
				periods: {
					contract: '3 ans, 11 mois : Sept 2021 - Juillet 2025',
					apprenticeShip: '1 an (alternance) : Sept 2020 - Août 2021',
					internship: '4 mois (stage): Mai 2020 - Août 2020',
				},
				content: {
					cont1:
						'SaaS de gestion de patients à destination des professionnels de santé spécialisés',
					cont2: 'Entretien et modernisation de la codebase principale',
					cont3: 'Consignation, évaluation et réduction de la dette technique',
					cont4:
						'Introduction du refinement technique dans un process agile Scrum',
					cont5:
						"Développement d'un éditeur de document avec plugins personnalisés",
					cont6: 'Rendu de documents PDF dynamiques',
					cont7: 'Migration de Redux Sagas vers React-Query',
					cont8: 'Optimisation et entretien de la CI',
					cont9: 'Création de micro-service avec Nest.js',
				},
			},
			imar: {
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
		whatilike: {
			title: "Ce que j'aime dans mon métier",
			problems: {
				title: 'Avoir des problèmes',
				content: 'Ceux qui font réfléchir avant de coder.',
			},
			architecture: {
				title: "L'architecture",
				content:
					'Concevoir des systèmes qui tiennent dans le temps, pas juste dans le sprint.',
			},
			detail: {
				title: 'Le détail qui change tout',
				content:
					'Que ce soit en UI ou en code, l\'écart entre "ça marche" et "c\'est bien fait" est souvent là où ça devient intéressant.',
			},
		},
		projects: {
			title: 'Projets',
			gitlabbot: {
				title: 'Gitlab Bot',
				context: 'Follow Health',
				content: {
					cont1:
						"Notifications et automatisations liées aux outils de l'équipe technique (Slack, Gitlab, Jira)",
					cont2: "Reprise du projet à l'abandon",
					cont3: 'Migration TS, ajout de test U, ajout de fonctionnalités',
				},
			},
			discordbot: {
				title: "Discord Bot (Shan'bot)",
				context: 'Projet personnel',
				content: {
					cont1: 'Bot pour un serveur privé servant à "ajouter de l\'ambiance"',
					cont2: 'Event listener, commandes slash, tests unitaires',
				},
			},
			resume: {
				title: 'CV en ligne',
				context: 'Projet personnel',
				content: {
					cont1:
						"Ce CV est généré via une app web, qui me sert également de portfolio et de terrain d'expérimentation technique et design",
					cont2: 'Exporté via API navigateur',
				},
			},
		},
	},
}
