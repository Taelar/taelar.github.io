import { TriangleBackground } from '~/components/backgrounds'
import { DEFAULT_LANGUAGE } from '~/model/lang'

export async function clientLoader() {
	window.location.href = DEFAULT_LANGUAGE
}

export default function Redirect() {
	return <TriangleBackground />
}

export function HydrateFallback() {
	return <TriangleBackground />
}
