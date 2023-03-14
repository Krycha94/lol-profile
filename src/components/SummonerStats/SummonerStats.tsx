import { useState } from "react";
import Match from "../Match/Match";
import Mastery from "../Mastery/Mastery";
import SummonerMasteryType from "../../types/SummonerMasteryType";
import { SummonerMatchType } from "../../types/SummonerMatchType";
import styles from "./SummonerStats.module.scss";

type SummonerStatsProps = {
	masteries: SummonerMasteryType[];
	matches: SummonerMatchType[];
	puuid: string;
};

const SummonerStats = ({ masteries, matches, puuid }: SummonerStatsProps) => {
	const [activeTab, setActiveTab] = useState<"matches" | "mastery">("matches");
	const [page, setPage] = useState(6);
	const paginatedMatches = matches.slice(0, page);
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
					{paginatedMatches.map((match, index) => (
						<Match key={index} {...match} puuid={puuid} />
					))}
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
				onClick={() => setPage((prev) => prev + 3)}
				className={styles.stats__button}
			>
				Show More...
			</button>
		</div>
	);
};
export default SummonerStats;
