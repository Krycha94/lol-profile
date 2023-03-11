import Match from "../Match/Match";
import styles from "./SummonerStats.module.scss";

const SummonerStats = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.stats__header}>
				<button>Matches</button>
				<button>Mastery</button>
			</div>
			<ul className={styles.stats__list}>
				<Match />
				<Match />
				<Match />
				<Match />
			</ul>
		</div>
	);
};
export default SummonerStats;
