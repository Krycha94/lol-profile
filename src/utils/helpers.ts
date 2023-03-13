export const calcWinrate = (wins: number, losses: number) =>
	Math.round((wins / (wins + losses)) * 100);
