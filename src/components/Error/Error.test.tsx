import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Error from "./Error";

describe("<Error />", () => {
	it("renders correctly", () => {
		render(<Error />, { wrapper: BrowserRouter });

		const headingEl = screen.getByRole("heading", { name: /error/i, level: 2 });
		expect(headingEl).toBeInTheDocument();
	});
});
