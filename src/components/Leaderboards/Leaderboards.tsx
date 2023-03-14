import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getTopPlayers } from "../../api/summonersApi";
import { regions } from "../../utils/constants";
import { paginate } from "../../utils/helpers";
import LeaderboardsTable from "../LeaderboardsTable/LeaderboardsTable";
import Spinner from "../Spinner/Spinner";
import LeaderboardsPlayerType from "../../types/LeaderboardsPlayerType";
import styles from "./Leaderboards.module.scss";

const Leaderboards = () => {
	const [enteredRegion, setEnteredRegion] = useState("eun1");
	const [players, setPlayers] = useState<LeaderboardsPlayerType[]>([]);
	const [paginatedPlayers, setPaginatedPlayers] = useState<
		LeaderboardsPlayerType[][]
	>([]);
	const [page, setPage] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchTopPlayers = async () => {
		setIsLoading(true);
		try {
			const data = await getTopPlayers(enteredRegion);
			const sortedPlayers = [...data].sort(
				(a, b) => b.leaguePoints - a.leaguePoints
			);
			//We add rank manually for later use
			const updatedPlayers = sortedPlayers.map((player, index) => {
				return { ...player, rank: index + 1 };
			});
			const paginatedPlayers = paginate(updatedPlayers.slice(0, 200));

			setPlayers(paginatedPlayers[page]);
			setPaginatedPlayers(paginatedPlayers);
			setIsLoading(false);
			setIsError(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	};

	useEffect(() => {
		fetchTopPlayers();
	}, [enteredRegion, page]);

	if (isLoading) return <Spinner />;

	if (isError) return <Navigate to="/error" />;

	return (
		<section className={styles.leaderboards}>
			<h2 className={styles.leaderboards__title}>Leaderboards</h2>
			<div className={styles.leaderboards__search}>
				<p>Region:</p>
				<select
					name="leaderboard-region"
					id="leaderboard-region"
					className={styles.leaderboards__select}
					value={enteredRegion}
					onChange={(e) => setEnteredRegion(e.target.value)}
				>
					{regions.map((region) => (
						<option key={region.id} value={region.value}>
							{region.text}
						</option>
					))}
				</select>
			</div>
			<LeaderboardsTable players={players} region={enteredRegion} />
			<div className={styles.leaderboards__btnContainer}>
				<button
					onClick={() => setPage((old) => old - 1)}
					disabled={page === 0}
					className={styles.leaderboards__btn}
				>
					Prev
				</button>
				{paginatedPlayers.map((btn, index) => (
					<button
						key={index}
						onClick={() => setPage(index)}
						className={`${styles.pageBtn} ${index === page && styles.active}`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => setPage((old) => old + 1)}
					disabled={page === paginatedPlayers.length - 1}
					className={styles.leaderboards__btn}
				>
					Next
				</button>
			</div>
		</section>
	);
};
export default Leaderboards;
