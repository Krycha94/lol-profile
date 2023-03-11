import styles from "./Mastery.module.scss";

const Mastery = () => {
	return (
		<li className={styles.mastery}>
			<img src="http://unsplash.it/400/200" alt="" className={styles.mastery__champion}/>
			<h5>Twisted Fate</h5>
			<img src="http://unsplash.it/400/200" alt="" className={styles.mastery__badge}/>
			<p>485867</p>
		</li>
	);
};
export default Mastery;
