import type { IconName } from '../Icon/Icon.component'
import styles from './ButtonGroup.module.scss'
import { Icon } from '../Icon'
import { Link } from 'react-router'
import classNames from 'classnames'

type BaseGroupOption = {
	label: string
}

type LabelGroupOption<T> = BaseGroupOption & {
	value: T
}

type UrlGroupOption = BaseGroupOption & {
	url: string
}

type IntermediaryGroupOption<T> = LabelGroupOption<T> | UrlGroupOption

type IconGroupOption<T> = IntermediaryGroupOption<T> & {
	icon: IconName
}

type TextGroupOption<T> = IntermediaryGroupOption<T> & {
	text: string
}

export type GroupOption<T> = IconGroupOption<T> | TextGroupOption<T>

interface ButtonGroupProps<T> {
	value: T
	options: Array<GroupOption<T>>
	onSelect?: (selected: GroupOption<T>) => void
}

export function ButtonGroup<T>({
	value,
	options,
	onSelect,
}: ButtonGroupProps<T>) {
	const renderInnerNode = (option: GroupOption<T>) =>
		'icon' in option ? (
			<Icon icon={option.icon} additionnalClassNames={styles['icon']} />
		) : (
			option.text
		)

	return (
		<div className={styles['group']}>
			{options.map((option, index) =>
				'value' in option ? (
					<button
						key={index}
						className={styles['button']}
						disabled={value === option.value}
						title={option.label}
						onClick={() => onSelect?.(option)}
					>
						{renderInnerNode(option)}
					</button>
				) : (
					<Link
						key={index}
						to={option.url}
						className={classNames(styles['button'], {
							[styles['disabled']]: value === option.url,
						})}
						reloadDocument
						title={option.label}
					>
						{renderInnerNode(option)}
					</Link>
				),
			)}
		</div>
	)
}
