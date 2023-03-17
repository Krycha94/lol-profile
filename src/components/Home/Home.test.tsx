import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe("<Home />", () => {
	it("renders correctly", () => {
		render(<Home />, { wrapper: BrowserRouter });

		const headingEl = screen.getByRole("heading", {
			name: /check your lol profile!/i,
		});
		expect(headingEl).toBeInTheDocument();
	});
});
