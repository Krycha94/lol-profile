import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const getSummoner = async (region: string, name: string) => {
	try {
		const { data } = await axios.get(
			`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`
		);
		return data;
	} catch (error) {
		//redirect error page
		alert((error as Error).message);
	}
};
