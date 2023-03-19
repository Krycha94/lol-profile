import { render, screen } from "@testing-library/react";

import About from "./About";

describe("<About />", () => {
	it("renders correctly", () => {
		render(<About />);

		const headingEl = screen.getByRole("heading", { name: /about/i, level: 2 });
		expect(headingEl).toBeInTheDocument();
	});
});
