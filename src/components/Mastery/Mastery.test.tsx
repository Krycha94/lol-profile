import { screen, render } from "@testing-library/react";
import { masteries } from "../../utils/dummyData";

import Mastery from "./Mastery";

describe("<Mastery />", () => {
	it("renders correctly", () => {
		render(<Mastery {...masteries[0]} />);

		const pEl = screen.getByText(/121564/i);
		expect(pEl).toBeInTheDocument();

		const imgEls = screen.getAllByRole("img");
		expect(imgEls).toHaveLength(2);
	});
});
