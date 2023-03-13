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
