import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSummoner } from "../../api/summonersApi";
import SummonerDetails from "../SummonerDetails/SummonerDetails";
import SummonerRank from "../SummonerRank/SummonerRank";
import SummonerStats from "../SummonerStats/SummonerStats";
import SummonerType from "../../types/SummonerType";
import styles from "./Summoner.module.scss";

const Summoner = () => {
	const { region: enteredRegion = "eun1", name: enteredName = "Denited" } =
		useParams();
	const [summoner, setSummoner] = useState<SummonerType>({
		id: "",
		puuid: "",
		name: "",
		profileIconId: 0,
		summonerLevel: 0,
	});

	const fetchSummoner = async () => {
		const { id, puuid, name, profileIconId, summonerLevel } = await getSummoner(
			enteredRegion,
			enteredName
		);
		setSummoner({ id, puuid, name, profileIconId, summonerLevel });
	};

	useEffect(() => {
		fetchSummoner();
	}, []);

	return (
		<section className={styles.summoner}>
			<SummonerDetails {...summoner} />
			<div className={styles.flex}>
				<SummonerRank />
				<SummonerStats />
			</div>
		</section>
	);
};
export default Summoner;
