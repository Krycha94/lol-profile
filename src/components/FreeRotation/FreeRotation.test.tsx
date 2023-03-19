import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { freeRotationIds } from "../../utils/dummyData";

import FreeRotation from "./FreeRotation";

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<FreeRotation />", () => {
	it("fetches free rotation from an API and success", async () => {
		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { freeChampionIds: freeRotationIds } })
		);

		render(<FreeRotation />, { wrapper: BrowserRouter });

		const champion = await screen.findByText(/olaf/i);
		expect(champion).toHaveTextContent("Olaf");

		const championImages = await screen.findAllByRole("img");
		expect(championImages).toHaveLength(freeRotationIds.length);
	});

	it("fetches leaderboards from an API and fails", async () => {
		mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		render(<FreeRotation />, { wrapper: BrowserRouter });

		const champion = screen.queryByText(/olaf/i);
		expect(champion).toBeNull;

		const championImages = screen.queryAllByRole("img");
		expect(championImages).toHaveLength(0);
	});
});
