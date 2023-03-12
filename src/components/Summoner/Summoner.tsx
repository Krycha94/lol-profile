import SummonerDetails from "../SummonerDetails/SummonerDetails";
import SummonerRank from "../SummonerRank/SummonerRank";
import SummonerStats from "../SummonerStats/SummonerStats";
import styles from "./Summoner.module.scss";

const Summoner = () => {
	return (
		<section className={styles.summoner}>
			<SummonerDetails />
			<div className={styles.flex}>
				<SummonerRank />
				<SummonerStats />
			</div>
		</section>
	);
};
export default Summoner;
