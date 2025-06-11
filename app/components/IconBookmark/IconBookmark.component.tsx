import { type FC } from 'react'
import { type IconBookmarkProps } from './IconBookmark.model'
import styles from './IconBookmark.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const IconBookmark: FC<IconBookmarkProps> = ({ theme, children }) => {
	return (
		<div className={cx('container')}>
			<svg
				viewBox="-60 -100 120 200"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className={cx('bookmark', theme)}
			>
				<polygon
					className={cx('background')}
					points="-60,-100 -60,100 0,50 60,100 60,-100"
				/>
				<path
					className={cx('line')}
					d="M -50 -100 L -50 80 L 0 37 L 50 80 L 50 -100"
					fill="none"
					strokeWidth="5"
				/>
			</svg>
			<div className={cx('content')}>{children}</div>
		</div>
	)
}
