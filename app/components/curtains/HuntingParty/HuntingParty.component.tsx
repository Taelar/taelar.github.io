import { useRef, type FC } from 'react'
import styles from './HuntingParty.module.scss'
import classNames from 'classnames/bind'
import { useHuntingParty, type Target } from './useHuntingParty.hook'
import { InnocentTarget } from './InnocentTarget'
import confettiAnimation from './assets/confetti.webm'

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

const confettisSrc = `${confettiAnimation}#t=0.3`

export const HuntingParty: FC<HuntingPartyProps> = () => {
	const veilRef = useRef<HTMLDivElement>(null)

	const { targets, handleTargetClick } = useHuntingParty(veilRef)

	return (
		<div className={cx('veil')} ref={veilRef}>
			{targets.map((target) =>
				target.disappearingCountdown === null ? (
					<InnocentTarget
						key={target.id}
						className={cx('target')}
						style={{
							left: target.x - target.radius,
							top: target.y - target.radius,
							width: target.radius * 2,
							[CSS_VAR_SPIN_SPEED]: getSpinSpeed(target),
						}}
						onClick={() => handleTargetClick(target.id)}
					/>
				) : (
					<video
						key={target.id}
						autoPlay
						muted
						className={cx('conffeti')}
						style={{
							left: target.x - target.radius * 2,
							top: target.y - target.radius * 2,
							width: target.radius * 4,
						}}
					>
						<source src={confettisSrc} type="video/webm" />
					</video>
				),
			)}
		</div>
	)
}
