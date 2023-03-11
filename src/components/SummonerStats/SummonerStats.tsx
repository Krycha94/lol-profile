import Match from "../Match/Match";
import Mastery from "../Mastery/Mastery";
import styles from "./SummonerStats.module.scss";

const SummonerStats = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.stats__header}>
				<button>Matches</button>
				<button>Mastery</button>
			</div>
			{/* <ul className={styles.stats__match}>
				<Match />
				<Match />
				<Match />
				<Match />
			</ul> */}
			<ul className={styles.stats__mastery}>
				<Mastery />
				<Mastery />
				<Mastery />
				<Mastery />
				<Mastery />
				<Mastery />
				<Mastery />
				<Mastery />
			</ul>
		</div>
	);
};
export default SummonerStats;
