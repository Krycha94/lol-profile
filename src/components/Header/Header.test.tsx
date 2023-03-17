import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./Header";
import App from "../../App";

describe("<Header />", () => {
	it("heading and links render correctly", () => {
		render(<Header />, { wrapper: BrowserRouter });

		const headingEl = screen.getByRole("heading", { name: /lol profile/i });
		expect(headingEl).toBeInTheDocument();

		const linkEls = screen.getAllByRole("link");
		expect(linkEls).not.toHaveLength(0);
	});

	it("click link", async () => {
		const user = userEvent.setup();
		render(<App />);

		const homeEl = screen.getByRole("heading", {
			name: /check your lol profile!/i,
		});
		expect(homeEl).toBeInTheDocument();

		const linkEl = screen.getByRole("link", { name: /leaderboards/i });
		await user.click(linkEl);
		expect(homeEl).not.toBeInTheDocument();
	});
});
