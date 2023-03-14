import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	getSummoner,
	getRankPoints,
	getMasteryPoints,
	getAllMatches,
	getMatch,
} from "../../api/summonersApi";
import { transformRegion } from "../../utils/helpers";
import SummonerDetails from "../SummonerDetails/SummonerDetails";
import SummonerRank from "../SummonerRank/SummonerRank";
import SummonerStats from "../SummonerStats/SummonerStats";
import Spinner from "../Spinner/Spinner";
import SummonerType from "../../types/SummonerType";
import SummonerRankType from "../../types/SummonerRankType";
import SummonerMasteryType from "../../types/SummonerMasteryType";
import { SummonerMatchType } from "../../types/SummonerMatchType";
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
	const [masteries, setMasteries] = useState<SummonerMasteryType[]>([]);
	const [matches, setMatches] = useState<SummonerMatchType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchSummoner = async () => {
		setIsLoading(true);
		try {
			const { id, puuid, name, profileIconId, summonerLevel } =
				await getSummoner(enteredRegion, enteredName);
			setSummoner({ id, puuid, name, profileIconId, summonerLevel });

			const rankedData = await getRankPoints(enteredRegion, id);
			setRankeds(rankedData);

			const masteryData = await getMasteryPoints(enteredRegion, id);
			setMasteries(masteryData);

			const newRegion = transformRegion(enteredRegion);
			const matchesId = await getAllMatches(newRegion, puuid);
			const singleMatches = await Promise.all(
				matchesId.map(async (match: string) => await getMatch(newRegion, match))
			);
			setMatches(singleMatches);

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
				<SummonerStats
					masteries={masteries}
					matches={matches}
					puuid={summoner.puuid}
				/>
			</div>
		</section>
	);
};
export default Summoner;
