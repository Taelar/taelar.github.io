import styles from './welcome.module.scss'

export function Welcome() {
	return (
		<main className={styles['header']}>
			<h1 className={styles['title']}>
				Ce site est actuellement en développement
			</h1>
			<img
				className={styles['img']}
				src="https://c.tenor.com/owwi7tg-d1AAAAAd/tenor.gif"
				alt="Un raton-laveur qui tape sur un clavier"
			/>
			<h1 className={styles['title']}>Ça arrive fort</h1>
		</main>
	)
}
