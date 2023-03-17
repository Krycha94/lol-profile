import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummonerDetails from "./SummonerDetails";

describe("<SummonerDetails />", () => {
	const summoner = {
		name: "JohnnySlow",
		profileIconId: 537,
		summonerLevel: 57,
	};

	it("render correctly", () => {
		render(<SummonerDetails {...summoner} />);

		const imgEl = screen.getByRole("img");
		expect(imgEl).toBeInTheDocument();

		const summonerLevelEl = screen.getByText(/57/i);
		expect(summonerLevelEl).toHaveTextContent("57");

		const headingEl = screen.getByRole("heading", {
			level: 2,
			name: /johnnyslow/i,
		});
		expect(headingEl).toHaveTextContent("JohnnySlow");

		const btnEl = screen.getByRole("button", { name: /copy profile link/i });
		expect(btnEl).toHaveTextContent(/copy profile link/i);
	});

	it("button copy profile link", async () => {
		const user = userEvent.setup();

		render(<SummonerDetails {...summoner} />);

		const btnEl = screen.getByRole("button", { name: /copy profile link/i });
		expect(btnEl).toHaveTextContent(/copy profile link/i);
		await user.click(btnEl);
		expect(btnEl).toHaveTextContent(/copied/i);
	});
});
