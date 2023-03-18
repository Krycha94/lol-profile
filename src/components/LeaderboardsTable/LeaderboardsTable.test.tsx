import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { getWinrate } from "../../utils/helpers";
import { leaderboardsMock } from "../../utils/dummyData";

import LeaderboardsTable from "./LeaderboardsTable";

describe("<LeaderboardsTable />", () => {
	it("renders correctly", () => {
		render(<LeaderboardsTable players={leaderboardsMock} region="eun1" />, {
			wrapper: BrowserRouter,
		});
		const players = screen.getByRole("table");
		expect(players).toBeInTheDocument();
	});

	it("calculate winrate correctly", () => {
		render(<LeaderboardsTable players={leaderboardsMock} region="eun1" />, {
			wrapper: BrowserRouter,
		});

		const winrate = getWinrate(121, 56);
		expect(winrate).toBe(68);
		expect(winrate).not.toBe("68");
		expect(winrate).not.toBe(55);
	});
});
