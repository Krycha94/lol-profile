import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRankPoints, getSummoner } from "../../api/summonersApi";
import SummonerDetails from "../SummonerDetails/SummonerDetails";
import SummonerRank from "../SummonerRank/SummonerRank";
import SummonerStats from "../SummonerStats/SummonerStats";
import Spinner from "../Spinner/Spinner";
import SummonerType from "../../types/SummonerType";
import SummonerRankType from "../../types/SummonerRankType";
import styles from "./Summoner.module.scss";

const Summoner = () => {
	const navigate = useNavigate();
	const { region: enteredRegion = "eun1", name: enteredName = "Denited" } =
		useParams();
	const [summoner, setSummoner] = useState<SummonerType>({
		id: "",
		puuid: "",
		name: "",
		profileIconId: 0,
		summonerLevel: 0,
	});
	const [rankeds, setRankeds] = useState<SummonerRankType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchSummoner = async () => {
		setIsLoading(true);
		try {
			const { id, puuid, name, profileIconId, summonerLevel } =
				await getSummoner(enteredRegion, enteredName);
			setSummoner({ id, puuid, name, profileIconId, summonerLevel });

			const ranks = await getRankPoints(enteredRegion, id);
			setRankeds(ranks);

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			navigate("/error");
		}
	};

	useEffect(() => {
		fetchSummoner();
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<section className={styles.summoner}>
			<SummonerDetails {...summoner} />
			<div className={styles.flex}>
				<SummonerRank rankeds={rankeds} />
				<SummonerStats />
			</div>
		</section>
	);
};
export default Summoner;
