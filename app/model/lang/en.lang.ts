import type { LangFile } from './lang.model'

export const LANG_FILE_EN: LangFile = {
	global: {
		description:
			'Welcome to my CV which vaguely serves as a portfolio, I put a bit of everything and anything here, but mostly anything.',
		jobTitle: 'Front-end Developer',
		fullName: 'Thomas Esseul',
	},
	layout: {
		githubRepo: 'Github Repository',
		background: {
			water: {
				title: 'Background style : Water',
				select: {
					title: 'Ripples frequency',
					chaos: 'Chaos',
					fast: 'Fast',
					medium: 'Medium',
					slow: 'Slow',
				},
			},
			triangles: {
				title: 'Background style : Triangles',
			},
		},
	},
	resume: {
		experiences: {
			title: 'Experience',
			titleNext: 'Experience (Next)',
			ovh: {
				jobTitle: 'Senior Front-end Engineer',
				enterprise: 'OVHCloud | Rennes',
				periods: {
					contract: 'Since November 2025',
				},
				content: {
					cont1:
						'Enrichment of the managed Kubernetes product interface (Public Cloud)',
					cont2: 'AI-assisted development (Cursor, Claude Code)',
					cont3:
						'Implementation of hexagonal architecture in a historical project',
				},
			},
			follow: {
				jobTitle: 'Front-end Developer',
				enterprise: 'Follow Health | Rennes',
				periods: {
					contract: '3 years, 11 months: Sept 2021 - July 2025',
					apprenticeShip: '1 year (apprenticeship): Sept 2020 - Aug 2021',
					internship: '4 months (internship): May 2020 - Aug 2020',
				},
				content: {
					cont1:
						'SaaS for patient management aimed at specialized healthcare professionals',
					cont2: 'Maintenance and modernization of the main codebase',
					cont3: 'Documentation, assessment and reduction of technical debt',
					cont4:
						'Introduction of technical refinement in an agile Scrum process',
					cont5: 'Development of a document editor with custom plugins',
					cont6: 'Dynamic PDF document rendering',
					cont7: 'Migration from Redux Sagas to React-Query',
					cont8: 'CI optimization and maintenance',
					cont9: 'Microservice creation with Nest.js',
				},
			},
			imar: {
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
		whatilike: {
			title: 'What I love about my job',
			problems: {
				title: 'Having problems',
				content: 'The kind that make you think before you code.',
			},
			architecture: {
				title: 'Architecture',
				content: 'Designing systems that last beyond the sprint.',
			},
			detail: {
				title: 'The detail that makes the difference',
				content:
					'Whether in UI or code, the gap between "it works" and "it\'s done right" is often where things get interesting.',
			},
		},
		projects: {
			title: 'Projects',
			gitlabbot: {
				title: 'Gitlab Bot',
				context: 'Follow Health',
				content: {
					cont1:
						'Notifications and automations related to technical team tools (Slack, Gitlab, Jira)',
					cont2: 'Project takeover from abandonment',
					cont3: 'TS migration, addition of unit tests, addition of features',
				},
			},
			discordbot: {
				title: 'Discord Bot',
				context: 'Personal project',
				content: {
					cont1: 'Bot for a private server used to "add atmosphere"',
					cont2: 'Event listener, slash commands, unit tests',
				},
			},
			resume: {
				title: 'This Resume',
				context: 'Personal project',
				content: {
					cont1:
						'This resume is generated via a web app, which also serves as my portfolio and a technical and design experimentation ground',
					cont2: 'Exported via browser API',
				},
			},
		},
	},
} as const
