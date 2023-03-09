import { regions } from "../../utils/constants";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
	return (
		<section className={styles.section}>
			<h2>Check your LoL Profile!</h2>
			<form className={styles.section__form}>
				<div className={styles.section__control}>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Enter your username:"
					/>
					<select name="region" id="region">
						{regions.map((region) => (
							<option key={region.id} value={region.value}>
								{region.text}
							</option>
						))}
					</select>
				</div>

				<button type="submit">Submit</button>
			</form>
		</section>
	);
};
export default SearchForm;
