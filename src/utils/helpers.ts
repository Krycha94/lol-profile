import moment from "moment/moment";
import { queueIdArray, profileIcons } from "./constants";
import LeaderboardsPlayerType from "../types/LeaderboardsPlayerType";

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

export const calcWinrate = (wins: number, losses: number) =>
	Math.round((wins / (wins + losses)) * 100);

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

export const getWinrate = (wins: number, losses: number) =>
	+((wins / (wins + losses)) * 100).toFixed(0) || 50;

export const getProfileIcon = () =>
	profileIcons[Math.floor(Math.random() * profileIcons.length)];

export const paginate = (array: LeaderboardsPlayerType[]) => {
	const itemsPerPage = 20;
	const pages = Math.ceil(array.length / itemsPerPage);
	const paginatedArray = Array.from({ length: pages }, (_, index) => {
		const start = index * itemsPerPage;
		return array.slice(start, start + itemsPerPage);
	});

	return paginatedArray;
};
