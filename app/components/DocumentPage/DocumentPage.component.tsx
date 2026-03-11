import { type FC } from 'react'
import type { PropsWithChildren } from 'react'
import styles from './DocumentPage.module.scss'
import classNames from 'classnames/bind'

type DocumentPageLayout = 'header' | 'footer'

type DocumentPageProps = PropsWithChildren<{
	layout: DocumentPageLayout
	className?: string
}>

const cx = classNames.bind(styles)

export const DocumentPage: FC<DocumentPageProps> = ({
	children,
	layout,
	className,
}) => {
	return <div className={cx(styles.page, layout, className)}>{children}</div>
}
