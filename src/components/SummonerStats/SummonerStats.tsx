import { useState } from "react";
import Match from "../Match/Match";
import Mastery from "../Mastery/Mastery";
import SummonerMasteryType from "../../types/SummonerMasteryType";
import styles from "./SummonerStats.module.scss";

type SummonerStatsProps = {
	masteries: SummonerMasteryType[];
};

const SummonerStats = ({ masteries }: SummonerStatsProps) => {
	const [activeTab, setActiveTab] = useState<"matches" | "mastery">("matches");
	const [page, setPage] = useState(6);

	const paginatedMasteries = masteries.slice(0, page);

	return (
		<div className={styles.stats}>
			<div className={styles.stats__header}>
				<button
					onClick={() => setActiveTab("matches")}
					className={`${activeTab === "matches" && styles.active}`}
				>
					Matches
				</button>
				<button
					onClick={() => setActiveTab("mastery")}
					className={`${activeTab === "mastery" && styles.active}`}
				>
					Mastery
				</button>
			</div>
			{activeTab === "matches" && (
				<ul className={styles.stats__match}>
					<Match />
					<Match />
					<Match />
					<Match />
				</ul>
			)}
			{activeTab === "mastery" && (
				<ul className={styles.stats__mastery}>
					{paginatedMasteries.map((mastery) => (
						<Mastery key={mastery.championId} {...mastery} />
					))}
				</ul>
			)}
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
