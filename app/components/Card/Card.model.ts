import type { ReactNode } from 'react'

export interface CardProps {
	leftTitle: string
	rightTitle?: string
	subTitle?: string
	children?: ReactNode
	tags?: Array<string>
}
