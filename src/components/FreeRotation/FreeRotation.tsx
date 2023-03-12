import styles from "./FreeRotation.module.scss";

const FreeRotation = () => {
	return (
		<section className={styles.rotation}>
			<h2 className={styles.rotation__title}>Free Rotation</h2>
			<p className={styles.rotation__desc}>
				Champions you can play for free this week.
			</p>
			<ul className={styles.rotation__list}>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
				<li className={styles.rotation__item}>
					<figure>
						<img src="http://unsplash.it/400/200" alt="" />
						<figcaption>Vladimir</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	);
};
export default FreeRotation;
