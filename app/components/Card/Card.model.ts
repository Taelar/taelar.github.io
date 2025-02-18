import type { ReactNode } from 'react'

export interface CardProps {
	leftTitle: string
	rightTitle?: string
	subTitles?: Array<string>
	children?: ReactNode
	tags?: Array<string>
}
