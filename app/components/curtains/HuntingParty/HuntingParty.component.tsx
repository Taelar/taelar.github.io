/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, type FC } from 'react'
import styles from './HuntingParty.module.scss'
import classNames from 'classnames/bind'
import { useHuntingParty, type Target } from './useHuntingParty.hook'
import { InnocentTarget } from './InnocentTarget'
import confettiAnimation from './assets/confetti.webm'
import type { LangFile } from '~/model/lang'

const cx = classNames.bind(styles)
const CSS_VAR_SPIN_SPEED: string = '--target-spin-speed'

type HuntingPartyProps = {
	langFile: LangFile
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

export const HuntingParty: FC<HuntingPartyProps> = ({ langFile }) => {
	const veilRef = useRef<HTMLDivElement>(null)

	const {
		targets,
		disappearings,
		score,
		killstreak,
		onTargetClick,
		onClickVeil,
	} = useHuntingParty(veilRef)

	return (
		<div className={cx('veil')} ref={veilRef} onClick={onClickVeil}>
			{targets.map((target) => (
				<InnocentTarget
					key={target.id}
					className={cx('target')}
					style={{
						left: target.x - target.radius,
						top: target.y - target.radius,
						width: target.radius * 2,
						[CSS_VAR_SPIN_SPEED]: getSpinSpeed(target),
					}}
					onClick={(event) => onTargetClick(target.id, event)}
				/>
			))}
			{disappearings.map((target) => (
				<video
					key={target.id}
					autoPlay
					muted
					preload="auto"
					className={cx('conffeti')}
					style={{
						left: target.x - target.radius,
						top: target.y - target.radius,
						width: target.radius * 2,
						display: target.disappearingCountdown === null ? 'none' : undefined,
					}}
				>
					<source src={confettisSrc} type="video/webm" />
				</video>
			))}
			<div className={cx('scores')}>
				<p>
					{langFile.layout.curtains.huntingParty.score}: {score}
				</p>
				<p>
					{langFile.layout.curtains.huntingParty.killstreak}: {killstreak}
				</p>
			</div>
		</div>
	)
}
