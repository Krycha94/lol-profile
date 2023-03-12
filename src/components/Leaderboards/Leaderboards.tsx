import { regions } from "../../utils/constants";
import LeaderboardsTable from "../LeaderboardsTable/LeaderboardsTable";
import styles from "./Leaderboards.module.scss";

const Leaderboards = () => {
	return (
		<section className={styles.leaderboards}>
			<h2 className={styles.leaderboards__title}>Leaderboards</h2>
			<div className={styles.leaderboards__search}>
				<p>Region:</p>
				<select
					name="leaderboard-region"
					id="leaderboard-region"
					className={styles.leaderboards__select}
				>
					{regions.map((region) => (
						<option key={region.id} value={region.value}>
							{region.text}
						</option>
					))}
				</select>
			</div>
			<LeaderboardsTable />
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
