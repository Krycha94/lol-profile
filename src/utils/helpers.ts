import moment from "moment/moment";
import { queueIdArray } from "./constants";

export const calcWinrate = (wins: number, losses: number) =>
	Math.round((wins / (wins + losses)) * 100);

export const transformRegion = (region: string) => {
	switch (region) {
		case "eun1":
		case "euw1":
		case "tr1":
		case "ru":
			return "europe";

		case "kr":
		case "jp1":
			return "asia";

		case "na1":
		case "la1":
		case "la2":
		case "br1":
		case "oc1":
			return "americas";

		default:
			return "europe";
	}
};

export const getGameMode = (id: number) => {
	const gameMode = queueIdArray.find((que) => que.queueId === id);
	return gameMode?.description || "Normal Draft";
};

export const getTimePlayed = (seconds: number) => {
	const duration = moment.duration(seconds, "seconds");
	const formattedDuration = moment
		.utc(duration.asMilliseconds())
		.format("mm:ss");
	return formattedDuration || "00:00";
};

export const getKDA = (kills: number, deaths: number, assists: number) => {
	if (deaths === 0) {
		deaths = 1;
	}
	return ((kills + assists) / deaths).toFixed(1) || 0;
};
