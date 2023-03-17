import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummonerStats from "./SummonerStats";

describe("<SummonerStats />", () => {
	const masteries = [{ championId: 0, championLevel: 0, championPoints: 0 }];
	const matches = [
		{
			gameDuration: 0,
			gameEndTimestamp: 0,
			participants: [
				{
					assists: 0,
					champLevel: 0,
					championName: "",
					deaths: 0,
					item0: 0,
					item1: 0,
					item2: 0,
					item3: 0,
					item4: 0,
					item5: 0,
					item6: 0,
					kills: 0,
					neutralMinionsKilled: 0,
					perks: {
						styles: [
							{
								selections: [
									{
										perk: 0,
									},
								],
							},
							{
								style: 0,
							},
						],
					},
					puuid: "",
					summoner1Id: 0,
					summoner2Id: 0,
					summonerName: "",
					totalMinionsKilled: 0,
					win: true,
				},
			],
			platformId: "",
			queueId: 0,
		},
	];

	it("renders match ONLY when matches button is clicked", async () => {
		const user = userEvent.setup();
		render(<SummonerStats masteries={masteries} matches={matches} puuid="" />);

		const matchesBtn = screen.getByRole("button", { name: /matches/i });
		await user.click(matchesBtn);

		const matchHeader = screen.getByRole("heading", {
			level: 3,
			name: /normal draft/i,
		});
		expect(matchHeader).toBeInTheDocument();

		const masteryHeader = screen.queryByRole("heading", { level: 5 });
		expect(masteryHeader).toBeNull();
	});

	it("renders mastery ONLY when mastery button is clicked", async () => {
		const user = userEvent.setup();
		render(<SummonerStats masteries={masteries} matches={matches} puuid="" />);

		const masteryBtn = screen.getByRole("button", { name: /mastery/i });
		await user.click(masteryBtn);

		const matchHeader = screen.queryByRole("heading", {
			level: 3,
			name: /normal draft/i,
		});
		expect(matchHeader).toBeNull();

		const masteryHeader = screen.getByRole("heading", { level: 5 });
		expect(masteryHeader).toBeInTheDocument();
	});
});
