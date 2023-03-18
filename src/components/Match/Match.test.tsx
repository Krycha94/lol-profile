import { screen, render } from "@testing-library/react";
import { matches } from "../../utils/dummyData";

import Match from "./Match";

describe("<Match />", () => {
	it("renders correctly", () => {
		render(<Match {...matches[0]} />);

		const headingEl = screen.getByRole("heading", {
			level: 3,
			name: /ranked solo/i,
		});
		expect(headingEl).toBeInTheDocument();

		const imgEls = screen.getAllByAltText("Sion");
		expect(imgEls).toHaveLength(2);

		const linkEl = screen.getByRole("link", { name: /TsogTheGo/i });
		expect(linkEl).toBeInTheDocument();
	});
});
