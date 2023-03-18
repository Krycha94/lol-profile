import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matches, masteries } from "../../utils/dummyData";

import SummonerStats from "./SummonerStats";

describe("<SummonerStats />", () => {
	const puuid =
		"8aGmVGJa1gmhpHdX88OSjwAjRumY-AgV2RXDPVT2n62P4SK38vDHHeCctCu7fq_A1hcwA8hOqSwPVg";

	it("renders matches ONLY when matches button is clicked", async () => {
		const user = userEvent.setup();
		render(
			<SummonerStats masteries={masteries} matches={matches} puuid={puuid} />
		);

		const matchesBtn = screen.getByRole("button", { name: /matches/i });
		await user.click(matchesBtn);

		const matchItems = screen.getAllByRole("listitem");
		expect(matchItems).toHaveLength(matches.length);

		const masteryHeader = screen.queryByRole("heading", { level: 5 });
		expect(masteryHeader).toBeNull();
	});

	it("renders mastery ONLY when mastery button is clicked", async () => {
		const user = userEvent.setup();
		render(
			<SummonerStats masteries={masteries} matches={matches} puuid={puuid} />
		);

		const masteryBtn = screen.getByRole("button", { name: /mastery/i });
		await user.click(masteryBtn);

		const masteryItems = screen.getAllByRole("listitem");
		expect(masteryItems).toHaveLength(masteries.length);

		const matchHeader = screen.queryByRole("heading", {
			level: 3,
			name: /normal draft/i,
		});
		expect(matchHeader).toBeNull();
	});
});
