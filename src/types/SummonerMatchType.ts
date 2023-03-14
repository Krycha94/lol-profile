export type ParticipantsType = {
	assists: number;
	champLevel: number;
	championName: string;
	deaths: number;
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	kills: number;
	neutralMinionsKilled: number;
	perks: any;
	puuid: string;
	summoner1Id: number;
	summoner2Id: number;
	summonerName: string;
	totalMinionsKilled: number;
	win: boolean;
};

export type SummonerMatchType = {
	gameDuration: number;
	gameEndTimestamp: number;
	participants: ParticipantsType[];
	platformId: string;
	queueId: number;
};
