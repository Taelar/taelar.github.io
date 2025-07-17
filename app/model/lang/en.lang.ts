import type { LangFile } from './lang.model'

export const LANG_FILE_EN: LangFile = {
	global: {
		description:
			'Welcome to my CV which vaguely serves as a portfolio, I put a bit of everything and anything here, but mostly anything.',
		jobTitle: 'Front-end Developer',
		fullName: 'Thomas Esseul',
	},
	resume: {
		experiences: {
			title: 'Experience',
			exp1: {
				jobTitle: 'Front-end Developer',
				enterprise: 'Follow Health | Rennes',
				periods: {
					contract: '3 years, 11 months: Sept 2021 - July 2025',
					apprenticeShip: '1 year (apprenticeship): Sept 2020 - Aug 2021',
					internship: '4 months (internship): May 2020 - Aug 2020',
				},
				content: {
					cont1: 'Feature additions, bug fixes, UI design',
					cont2: 'Maintenance and modernization of the main codebase',
					cont3: 'Documentation, assessment and reduction of technical debt',
					cont4: 'Participation in team process improvements',
					cont5: 'Development of a document editor with custom plugins',
					cont6: 'Dynamic PDF document rendering',
					cont7: 'Migration from Redux Sagas to React-Query',
					cont8: 'CI optimization and maintenance',
					cont9: 'Microservice creation with Nest.js',
				},
			},
			exp2: {
				jobTitle: 'Web Developer',
				enterprise: 'IMaR | Tralee, Ireland',
				periods: {
					internship: '3 months (internship): April 2018 - June 2018',
				},
				content: {
					cont1: 'Development of an e-commerce website',
				},
			},
		},
		languages: {
			title: 'Languages',
			french: {
				title: 'French',
				level: 'Mother Tongue',
			},
			english: {
				title: 'English',
				level: 'Fluent',
			},
		},
		education: {
			title: 'Education',
			educ1: {
				title: "Master's Degree in CS: Software Engineering",
				period: '2019 - 2021',
			},
			educ2: {
				title: "Bachelor's Degree in Computer Science",
				period: '2018 - 2019',
			},
			educ3: {
				title: 'DUT Computer Science: Software Engineering',
				period: '2016 - 2018',
			},
		},
		projects: {
			title: 'Projects',
			proj1: {
				title: 'Gitlab Bot',
				context: 'Follow Health',
				content:
					'Notifications and automations related to technical team tools (Slack, Gitlab, Jira)',
			},
			proj2: {
				title: 'Discord Bot',
				context: 'Personal project',
				content: 'Bot for a private server used to "add atmosphere"',
			},
		},
	},
} as const
