import { Link } from "react-router-dom";
import { getProfileIcon, getWinrate } from "../../utils/helpers";
import LeaderboardsPlayerType from "../../types/LeaderboardsPlayerType";
import styles from "./LeaderboardsTable.module.scss";

type LeaderboardsTableProps = {
	players: LeaderboardsPlayerType[];
	region: string;
};

const LeaderboardsTable = ({ players, region }: LeaderboardsTableProps) => {
	return (
		<table className={styles.leaderboards}>
			<thead>
				<tr className={styles.leaderboards__head}>
					<th>Rank</th>
					<th>Summoner</th>
					<th>Points</th>
					<th>Win Ratio</th>
				</tr>
			</thead>
			{players.map((player) => (
				<tbody key={player.summonerId} className={styles.leaderboards__body}>
					<tr>
						<td>{player.rank}</td>
						<td className={styles.leaderboards__summoner}>
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/${getProfileIcon()}.png`}
								alt="player profile icon"
							/>
							<Link to={`/summoner/${region}/${player.summonerName}`}>
								{player.summonerName}
							</Link>
						</td>
						<td>{player.leaguePoints} LP</td>
						<td>
							<div className={styles.leaderboards__winrateContainer}>
								<div className={styles.leaderboards__winrate}>
									<div
										className={styles.leaderboards__win}
										style={{
											width: `${getWinrate(player.wins, player.losses)}%`,
										}}
									>
										<span>{player.wins}</span>
									</div>
									<div
										className={styles.leaderboards__lose}
										style={{
											width: `${
												100 - +getWinrate(player.wins, player.losses)
											}%`,
										}}
									>
										<span>{player.losses}</span>
									</div>
								</div>
								<div>
									<span>{getWinrate(player.wins, player.losses)}%</span>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			))}
		</table>
	);
};
export default LeaderboardsTable;
