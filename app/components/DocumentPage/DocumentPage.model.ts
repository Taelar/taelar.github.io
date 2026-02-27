import type { PropsWithChildren } from 'react'

export type DocumentPageLayout = 'header' | 'footer'

export type DocumentPageProps = PropsWithChildren<{
	layout: DocumentPageLayout
	className?: string
}>
