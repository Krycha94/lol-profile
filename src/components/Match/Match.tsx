import moment from "moment/moment";
import { Link } from "react-router-dom";
import { getGameMode, getTimePlayed, getKDA } from "../../utils/helpers";
import { summonerSpell, runes } from "../../utils/constants";
import {
	SummonerMatchType,
	ParticipantsType,
} from "../../types/SummonerMatchType";
import styles from "./Match.module.scss";

type MatchProps = SummonerMatchType & { puuid: string };

const Match = ({
	puuid,
	gameEndTimestamp,
	queueId,
	participants,
	gameDuration,
	platformId,
}: MatchProps) => {
	const summoner = participants.find(
		(summoner) => summoner.puuid === puuid
	) as ParticipantsType;

	const { item0, item1, item2, item3, item4, item5, item6 } = summoner;
	const itemsArray = [item0, item1, item2, item3, item4, item5, item6];

	const victoryTeam = participants.filter((player) => player.win);
	const defeatedTeam = participants.filter((player) => !player.win);

	return (
		<li
			className={`${styles.match} ${
				summoner.win ? styles.victory : styles.defeat
			}`}
		>
			{/* match */}
			<div className={styles.match__info}>
				<h3>{getGameMode(queueId)}</h3>
				<p>{moment(gameEndTimestamp).fromNow()}</p>
				<p>
					{summoner.win ? "Victory" : "Defeat"} {getTimePlayed(gameDuration)}
				</p>
			</div>
			<div className={styles.match__champion}>
				{/* champion */}
				<div className={styles.match__championImage}>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${summoner.championName}.png`}
						alt={`${summoner.championName}`}
					/>
					<span>{summoner.champLevel}</span>
				</div>
				{/* spells */}
				<div className={styles.match__championSpells}>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${
							summonerSpell[summoner.summoner1Id]
						}`}
						alt="summoner spell"
					/>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${
							runes[summoner.perks.styles[0].selections[0].perk]
						}`}
						alt="rune"
					/>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${
							summonerSpell[summoner.summoner2Id]
						}`}
						alt="summoner spell"
					/>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${
							runes[summoner.perks.styles[1].style]
						}`}
						alt="rune"
					/>
				</div>
			</div>
			{/* stats */}
			<div className={styles.match__stats}>
				<p>
					{summoner.kills} / {summoner.deaths} / {summoner.assists}
				</p>
				<p>{getKDA(summoner.kills, summoner.deaths, summoner.assists)} KDA</p>
				<p>{summoner.totalMinionsKilled + summoner.neutralMinionsKilled} CS</p>
			</div>
			{/* items */}
			<div className={styles.match__items}>
				{itemsArray.map((item, index) => {
					if (item !== 0) {
						return (
							<img
								key={index}
								src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item}.png`}
								alt="item"
							/>
						);
					}
				})}
			</div>
			{/* players */}
			<div className={styles.match__players}>
				{/* team 1 */}
				<div className={styles.match__team}>
					{victoryTeam.map((player, index) => (
						<div key={index}>
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${player.championName}.png`}
								alt={`${player.championName}`}
							/>
							<Link to={`/summoner/${platformId}/${player.summonerName}`}>
								{player.summonerName}
							</Link>
						</div>
					))}
				</div>
				{/* team 2 */}
				<div className={styles.match__team}>
					{defeatedTeam.map((player, index) => (
						<div key={index}>
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${player.championName}.png`}
								alt={`${player.championName}`}
							/>
							<Link to={`/summoner/${platformId}/${player.summonerName}`}>
								{player.summonerName}
							</Link>
						</div>
					))}
				</div>
			</div>
		</li>
	);
};
export default Match;
