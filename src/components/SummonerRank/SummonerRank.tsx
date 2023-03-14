import { calcWinrate } from "../../utils/helpers";
import SummonerRankType from "../../types/SummonerRankType";
import styles from "./SummonerRank.module.scss";

type SummonerRankProps = {
	rankeds: SummonerRankType[];
};

const SummonerRank = ({ rankeds }: SummonerRankProps) => {
	const rankedSolo = rankeds.find(
		(ranked) => ranked.queueType === "RANKED_SOLO_5x5"
	);
	const rankedFlex = rankeds.find(
		(ranked) => ranked.queueType === "RANKED_FLEX_SR"
	);

	return (
		<div className={styles.ranks}>
			{/* ranked solo */}
			<div className={styles.ranks__card}>
				<div className={styles.ranks__header}>
					<p>Ranked Solo</p>
					<p>{rankedSolo ? "" : "Unranked"} </p>
				</div>
				{rankedSolo && (
					<div className={styles.ranks__content}>
						<div className={styles.ranks__division}>
							<img
								src={`/src/assets/ranks/${rankedSolo.tier}.png`}
								alt={`${rankedSolo.tier} badge`}
							/>
							<div className={styles.ranks__points}>
								<p>
									{rankedSolo.tier} {rankedSolo.rank}
								</p>
								<p>{rankedSolo.leaguePoints} LP</p>
							</div>
						</div>
						<div className={styles.ranks__winrate}>
							<div>
								<p>
									{rankedSolo.wins}W {rankedSolo.losses}L
								</p>
								<p>
									Win Rate {calcWinrate(rankedSolo.wins, rankedSolo.losses)}%
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
			{/* ranked flex */}
			<div className={styles.ranks__card}>
				<div className={styles.ranks__header}>
					<p>Ranked Flex</p>
					<p>{rankedFlex ? "" : "Unranked"}</p>
				</div>
				{rankedFlex && (
					<div className={styles.ranks__content}>
						<div className={styles.ranks__division}>
							<img
								src={`/src/assets/ranks/${rankedFlex.tier}.png`}
								alt={`${rankedFlex.tier} badge`}
							/>
							<div className={styles.ranks__points}>
								<p>
									{rankedFlex.tier} {rankedFlex.rank}
								</p>
								<p>{rankedFlex.leaguePoints} LP</p>
							</div>
						</div>
						<div className={styles.ranks__winrate}>
							<div>
								<p>
									{rankedFlex.wins}W {rankedFlex.losses}L
								</p>
								<p>
									Win Rate {calcWinrate(rankedFlex.wins, rankedFlex.losses)}%
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default SummonerRank;
