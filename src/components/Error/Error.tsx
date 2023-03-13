import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import styles from "./Error.module.scss";

const Error = () => {
	return (
		<>
			<section className={styles.error}>
				<h2 className={styles.error__title}>Error has occurred</h2>
				<div className={styles.error__desc}>
					<p>
						Please make sure you entered username correctly and that you have
						chosen the right region.
					</p>
					<p>Maybe the website exceeded its API limits.</p>
					<p>Please try again.</p>
					<img src={error} alt="azir with soldiers" />
					<Link to="/">Back Home</Link>
				</div>
			</section>
		</>
	);
};
export default Error;
