import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SummonerDetails.module.scss";

type SummonerProps = {
	name: string;
	profileIconId: number;
	summonerLevel: number;
};

const SummonerDetails = ({
	name,
	profileIconId,
	summonerLevel,
}: SummonerProps) => {
	const location = useLocation();
	const [isCoppied, setIsCoppied] = useState(false);

	const copyProfileLink = () => {
		//TODO fix url when app is deployed
		navigator.clipboard.writeText(`http://localhost:5173${location.pathname}`);
		setIsCoppied(true);
	};

	return (
		<header className={styles.summoner}>
			<div className={styles.summoner__avatar}>
				<img
					src={`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/${profileIconId}.png`}
					alt={`profile icon of player ${name}`}
				/>
				<span>{summonerLevel}</span>
			</div>

			<h2>{name}</h2>
			<button className={styles.summoner__button} onClick={copyProfileLink}>
				{isCoppied ? "Copied" : "Copy Profile Link"}
			</button>
		</header>
	);
};
export default SummonerDetails;
