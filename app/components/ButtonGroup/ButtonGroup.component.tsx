import { type ButtonGroupProps } from './ButtonGroup.model'
import styles from './ButtonGroup.module.scss'
import { Icon } from '../Icon'

export function ButtonGroup<T>({
	value,
	options,
	onSelect,
}: ButtonGroupProps<T>) {
	return (
		<div className={styles['group']}>
			{options.map((option, index) => (
				<button
					key={index}
					className={styles['button']}
					disabled={value === option.value}
					title={option.label}
					onClick={() => onSelect(option)}
				>
					<Icon icon={option.icon} additionnalClassNames={styles['icon']} />
				</button>
			))}
		</div>
	)
}
