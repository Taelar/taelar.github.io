import { type FC } from 'react'
import styles from './DocumentPage.module.scss'
import type { DocumentPageProps } from './DocumentPage.model'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const DocumentPage: FC<DocumentPageProps> = ({
	children,
	layout,
	className,
}) => {
	return <div className={cx(styles.page, layout, className)}>{children}</div>
}
