import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Summoner from "./Summoner";

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Summoner />", () => {
	it("fetches summoner from an API and success", async () => {
		const summonerMock = {
			name: "JohnnySlow",
			summonerLevel: 57,
		};

		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: summonerMock })
		);

		render(<Summoner />, { wrapper: BrowserRouter });

		const summonerName = await screen.findByRole("heading", {
			level: 2,
			name: /johnnyslow/i,
		});
		const summonerLevel = await screen.findByText(/57/i);
		expect(summonerName).toHaveTextContent("JohnnySlow");
		expect(summonerLevel).toHaveTextContent("57");
	});

	it("fetches summoner from an API and fails", async () => {
		mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		render(<Summoner />, { wrapper: BrowserRouter });

		const summonerName = screen.queryByRole("heading", {
			level: 2,
			name: /johnnyslow/i,
		});
		const summonerLevel = screen.queryByText(/57/i);
		expect(summonerName).toBeNull();
		expect(summonerLevel).toBeNull();
	});
});
