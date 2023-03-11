import styles from "./SummonerDetails.module.scss";

const SummonerDetails = () => {
	return (
		<header className={styles.summoner}>
			<div className={styles.summoner__avatar}>
				<img src="http://unsplash.it/400/200" alt="summoner-avatar" />
				<span>209</span>
			</div>

			<h2>Denited</h2>
			<button className={styles.summoner__button}>Copy Profile Link</button>
		</header>
	);
};
export default SummonerDetails;
