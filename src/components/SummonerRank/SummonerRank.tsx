import styles from "./SummonerRank.module.scss";

const SummonerRank = () => {
	return (
		<div className={styles.ranks}>
			{/* ranked solo */}
			<div className={styles.ranks__card}>
				<div className={styles.ranks__header}>
					<p>Ranked Solo</p>
					<p>Unranked</p>
				</div>
				{/* <div className={styles.ranks__content}>
					<div className={styles.ranks__division}>
						<img src="" alt="" />
						<div className={styles.ranks__points}>
							<p>Bronze 4</p>
							<p>20 LP</p>
						</div>
					</div>
					<div className={styles.ranks__winrate}>
						<p>
							<span>11W</span> <span>22L</span>
							<p>Win Rate 33%</p>
						</p>
					</div>
				</div> */}
			</div>
			{/* ranked flex */}
			<div className={styles.ranks__card}>
				<div className={styles.ranks__header}>
					<p>Ranked Flex</p>
					<p>Unranked</p>
				</div>
				<div className={styles.ranks__content}>
					<div className={styles.ranks__division}>
						<img src="http://unsplash.it/400/200" alt="" />
						<div className={styles.ranks__points}>
							<p>Bronze IV</p>
							<p>20 LP</p>
						</div>
					</div>
					<div className={styles.ranks__winrate}>
						<div>
							<p>11W 22L</p>
							<p>Win Rate 33%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SummonerRank;
