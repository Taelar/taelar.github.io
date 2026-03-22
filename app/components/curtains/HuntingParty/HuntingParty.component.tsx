import { useRef, type FC } from 'react'
import styles from './HuntingParty.module.scss'
import classNames from 'classnames/bind'
import { useHuntingParty, type Target } from './useHuntingParty.hook'
import { InnocentTarget } from './InnocentTarget'

const cx = classNames.bind(styles)
const CSS_VAR_SPIN_SPEED: string = '--target-spin-speed'

type HuntingPartyProps = {
	className?: string
}

const getSpinSpeed = (target: Target): string => {
	const absVx = Math.abs(target.vx)
	const absVy = Math.abs(target.vy)
	const radiusFactor = target.radius * 0.1
	const speed = (absVx + absVy + radiusFactor) * 75

	return `${speed}ms`
}

export const HuntingParty: FC<HuntingPartyProps> = () => {
	const veilRef = useRef<HTMLDivElement>(null)

	const { targets } = useHuntingParty(veilRef)

	return (
		<div className={cx('veil')} ref={veilRef}>
			{targets.map((target, index) => (
				<InnocentTarget
					key={index}
					className={cx('target')}
					style={{
						left: target.x - target.radius,
						top: target.y - target.radius,
						width: target.radius * 2,
						[CSS_VAR_SPIN_SPEED]: getSpinSpeed(target),
					}}
				/>
			))}
		</div>
	)
}
