import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const getSummoner = async (region: string, name: string) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`
	);
	return data;
};

export const getRankPoints = async (region: string, id: string) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`
	);
	return data;
};

export const getMasteryPoints = async (region: string, id: string) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${apiKey}`
	);
	return data;
};

export const getAllMatches = async (
	region: string,
	puuid: string,
	page = 8
) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${page}&api_key=${apiKey}`
	);
	return data;
};

export const getMatch = async (region: string, matchId: string) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`
	);
	return data.info;
};

export const getTopPlayers = async (
	region: string,
	queue = "RANKED_SOLO_5x5"
) => {
	const { data } = await axios.get(
		`https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/${queue}?api_key=${apiKey}`
	);
	return data.entries;
};

export const getFreeChampions = async () => {
	const { data } = await axios.get(
		`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`
	);
	return data.freeChampionIds;
};
