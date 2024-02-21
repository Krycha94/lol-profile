import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regions } from "../../utils/constants";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
	const [enteredText, setEnteredText] = useState("");
	const [enteredRegion, setEnteredRegion] = useState("eun1");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (enteredText === "" || enteredRegion === "") {
			alert("Please enter summoner name!");
			return;
		}
		navigate(`/summoner/${enteredRegion}/${enteredText}`);
	};

	return (
		<section className={styles.section}>
			<h2>Check your LoL Profile!</h2>
			<form className={styles.section__form} onSubmit={handleSubmit}>
				<div className={styles.section__control}>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Enter you summoner name"
						value={enteredText}
						onChange={(e) => setEnteredText(e.target.value)}
					/>
					<select
						name="region"
						id="region"
						value={enteredRegion}
						onChange={(e) => setEnteredRegion(e.target.value)}
					>
						{regions.map((region) => (
							<option key={region.id} value={region.value}>
								{region.text}
							</option>
						))}
					</select>
				</div>

				<button type="submit">Search</button>
			</form>
		</section>
	);
};
export default SearchForm;
