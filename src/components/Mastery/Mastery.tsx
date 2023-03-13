import { m1, m2, m3, m4, m5, m6, m7 } from "../../assets/badges/index";
import { champions } from "../../utils/constants";
import SummonerMasteryType from "../../types/SummonerMasteryType";
import styles from "./Mastery.module.scss";

const Mastery = ({
	championId,
	championLevel,
	championPoints,
}: SummonerMasteryType) => {
	const champion = champions[championId];
	// console.log(championId);

	const badge =
		championLevel === 7
			? m7
			: championLevel === 6
			? m6
			: championLevel === 5
			? m5
			: championLevel === 4
			? m4
			: championLevel === 3
			? m3
			: championLevel === 2
			? m2
			: championLevel === 1
			? m1
			: "";

	return (
		<li className={styles.mastery}>
			<img
				src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${champion}.png`}
				alt={`${champion}`}
				className={styles.mastery__champion}
			/>
			<h5>{champion}</h5>
			<img src={badge} alt="badge" className={styles.mastery__badge} />
			<p>{championPoints}</p>
		</li>
	);
};
export default Mastery;
