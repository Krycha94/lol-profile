import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { leaderboardsMock } from "../../utils/dummyData";

import Leaderboards from "./Leaderboards";

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Leaderboards />", () => {
	it("fetches leaderboards from an API and success", async () => {
		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { entries: leaderboardsMock } })
		);

		render(<Leaderboards />, { wrapper: BrowserRouter });

		const summonerName = await screen.findByRole("link", {
			name: /soo enjoyable/i,
		});
		expect(summonerName).toHaveTextContent("Soo Enjoyable");

		const summonerPoints = await screen.findByText(/857/i);
		expect(summonerPoints).toHaveTextContent("857");

		const summonerWins = await screen.findByText(/45/i);
		expect(summonerWins).toHaveTextContent("45");

		const summonerLosses = await screen.findByText(/77/i);
		expect(summonerLosses).toHaveTextContent("77");
	});

	it("fetches leaderboards from an API and fails", async () => {
		mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		render(<Leaderboards />, { wrapper: BrowserRouter });

		const summonerName = screen.queryByRole("link", {
			name: /soo enjoyable/i,
		});
		expect(summonerName).toBeNull();

		const summonerPoints = screen.queryByText(/857/i);
		expect(summonerPoints).toBeNull();

		const summonerWins = screen.queryByText(/45/i);
		expect(summonerWins).toBeNull();

		const summonerLosses = screen.queryByText(/77/i);
		expect(summonerLosses).toBeNull();
	});
});
