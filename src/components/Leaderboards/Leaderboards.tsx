import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getTopPlayers } from "../../api/summonersApi";
import { regions } from "../../utils/constants";
import LeaderboardsTable from "../LeaderboardsTable/LeaderboardsTable";
import Spinner from "../Spinner/Spinner";
import LeaderboardsPlayerType from "../../types/LeaderboardsPlayerType";
import styles from "./Leaderboards.module.scss";

const Leaderboards = () => {
	const [enteredRegion, setEnteredRegion] = useState("eun1");
	const [players, setPlayers] = useState<LeaderboardsPlayerType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const sortedPlayers = [...players].sort(
		(a, b) => b.leaguePoints - a.leaguePoints
	);

	const fetchTopPlayers = async () => {
		setIsLoading(true);
		try {
			const data = await getTopPlayers(enteredRegion);
			setPlayers(data.slice(0, 200));
			setIsLoading(false);
			setIsError(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	};

	useEffect(() => {
		fetchTopPlayers();
	}, [enteredRegion]);

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
			<LeaderboardsTable players={sortedPlayers} region={enteredRegion} />
			<div className={styles.leaderboards__btnContainer}>
				<button>Prev</button>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>Next</button>
			</div>
		</section>
	);
};
export default Leaderboards;
