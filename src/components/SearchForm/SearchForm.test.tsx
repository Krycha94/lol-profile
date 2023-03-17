import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import SearchForm from "./SearchForm";

describe("<SearchForm />", () => {
	it("input, select and button render correctly", () => {
		render(<SearchForm />, { wrapper: BrowserRouter });

		const inputEl = screen.getByRole("textbox");
		expect(inputEl).toHaveValue("");

		const selectEl = screen.getByRole("combobox");
		expect(selectEl).toHaveValue("eun1");

		const btnEl = screen.getByRole("button", { name: /search/i });
		expect(btnEl).toBeInTheDocument();
	});

	it("type in text input", async () => {
		const user = userEvent.setup();
		render(<SearchForm />, { wrapper: BrowserRouter });

		const inputEl = screen.getByRole("textbox");
		await user.type(inputEl, "JohnnySlow");
		expect(inputEl).toHaveValue("JohnnySlow");
	});

	it("select region", async () => {
		const user = userEvent.setup();
		render(<SearchForm />, { wrapper: BrowserRouter });

		const selectEl = screen.getByRole("combobox");
		await user.selectOptions(selectEl, "euw1");
		expect(selectEl).toHaveValue("euw1");
	});

	it("click button", async () => {
		const user = userEvent.setup();
		render(<SearchForm />, { wrapper: BrowserRouter });

		const spyButton = vi.spyOn(user, "click");
		const btnEl = screen.getByRole("button", { name: /search/i });
		await user.click(btnEl);
		expect(spyButton).toHaveBeenCalledTimes(1);
	});
});
