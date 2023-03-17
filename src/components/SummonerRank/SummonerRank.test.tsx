import { screen, render } from "@testing-library/react";

import SummonerRank from "./SummonerRank";

describe("<SummonerRank />", () => {
	const rankeds = [
		{
			leaguePoints: 835,
			losses: 48,
			queueType: "RANKED_SOLO_5x5",
			rank: "I",
			tier: "CHALLENGER",
			wins: 73,
		},
	];

	it("render correctly", () => {
		render(<SummonerRank rankeds={rankeds} />);

		const paragraphEl = screen.getByText(/ranked solo/i);
		expect(paragraphEl).toBeInTheDocument();

		const queueEl = screen.getByText(/challenger i/i);
		expect(queueEl).toBeInTheDocument();

		const pointsEl = screen.getByText(/835 lp/i);
		expect(pointsEl).toBeInTheDocument();

		const imgEl = screen.getByRole("img", { name: /challenger badge/i });
		expect(imgEl).toBeInTheDocument();

		const unrankedEl = screen.getByText(/unranked/i);
		expect(unrankedEl).toBeInTheDocument();
	});
});
