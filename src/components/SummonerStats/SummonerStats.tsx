import { useState } from "react";
import Match from "../Match/Match";
import Mastery from "../Mastery/Mastery";
import SummonerMasteryType from "../../types/SummonerMasteryType";
import styles from "./SummonerStats.module.scss";

type SummonerStatsProps = {
	masteries: SummonerMasteryType[];
};

const SummonerStats = ({ masteries }: SummonerStatsProps) => {
	const [page, setPage] = useState(6);

	const paginatedMasteries = masteries.slice(0, page);

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
				{paginatedMasteries.map((mastery) => (
					<Mastery key={mastery.championId} {...mastery} />
				))}
			</ul>
			<button
				onClick={() => setPage((prev) => prev + 6)}
				className={styles.stats__button}
			>
				Show More...
			</button>
		</div>
	);
};
export default SummonerStats;
