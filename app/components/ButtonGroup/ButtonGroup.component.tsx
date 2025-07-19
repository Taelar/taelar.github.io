import { type ButtonGroupProps, type GroupOption } from './ButtonGroup.model'
import styles from './ButtonGroup.module.scss'
import { Icon } from '../Icon'
import { Link } from 'react-router'
import classNames from 'classnames'

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
