import { Welcome } from '../welcome/welcome'

export function meta() {
	return [
		{ title: 'Thomas Esseul - Développeur' },
		{
			name: 'description',
			content: `Bienvenue sur mon CV qui sert vaguement de portfolio, je mets un peu tout et n'importe quoi ici, mais surtout n'importe quoi.`,
		},
	]
}

export default function Home() {
	return <Welcome />
}
