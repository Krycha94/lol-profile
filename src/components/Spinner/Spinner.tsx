//I used spinner from https://codepen.io/wang0nya/pen/bzwQPr
import styles from "./Spinner.module.scss";

const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<div className={styles.spinner__loader}></div>
		</div>
	);
};
export default Spinner;
