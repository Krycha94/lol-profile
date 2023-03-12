import styles from "./LeaderboardsTable.module.scss";

const LeaderboardsTable = () => {
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
			{/* player 1 */}
			<tbody className={styles.leaderboards__body}>
				<tr>
					<td>1</td>
					<td className={styles.leaderboards__summoner}>
						<img src="http://unsplash.it/400/200" alt="" />
						<a href="">Denited</a>
					</td>
					<td>1232 LP</td>
					<td>
						<span className={styles.leaderboards__winrate}> 81 / 41 /</span> 66%
					</td>
				</tr>
			</tbody>
			{/* player 2 */}
			<tbody className={styles.leaderboards__body}>
				<tr>
					<td>1</td>
					<td className={styles.leaderboards__summoner}>
						<img src="http://unsplash.it/400/200" alt="" />
						<a href="">Denited</a>
					</td>
					<td>1232 LP</td>
					<td>
						<span className={styles.leaderboards__winrate}> 81 / 41 /</span> 66%
					</td>
				</tr>
			</tbody>
			{/* player 3 */}
			<tbody className={styles.leaderboards__body}>
				<tr>
					<td>1</td>
					<td className={styles.leaderboards__summoner}>
						<img src="http://unsplash.it/400/200" alt="" />
						<a href="">Denited</a>
					</td>
					<td>1232 LP</td>
					<td>
						<span className={styles.leaderboards__winrate}> 81 / 41 /</span> 66%
					</td>
				</tr>
			</tbody>
		</table>
	);
};
export default LeaderboardsTable;
