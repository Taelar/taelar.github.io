import { Welcome } from '../welcome/welcome'

export function meta() {
	return [
		{ title: 'Thomas Esseul - Développeur' },
		{
			name: 'description',
			content: `Ce site est en développement, ça arrive fort.`,
		},
	]
}

export default function Home() {
	return <Welcome />
}
