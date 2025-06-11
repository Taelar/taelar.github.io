import { type FC } from 'react'
import { type IconBookmarkProps } from './IconBookmark.model'
import styles from './IconBookmark.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const IconBookmark: FC<IconBookmarkProps> = ({ theme, children }) => {
	return (
		<div className={cx('container', theme)}>
			<svg
				viewBox="-60 -100 120 200"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className={cx('bookmark', theme)}
			>
				<polygon
					className={cx('background')}
					points="-60,-100 -60,100 0,70 60,100 60,-100"
				/>
				<path
					className={cx('line')}
					d="M -45 -100 L -45 75 L 0 51 L 45 75 L 45 -100"
					fill="none"
					strokeWidth="5"
				/>
			</svg>
			<div className={cx('content')}>{children}</div>
		</div>
	)
}
