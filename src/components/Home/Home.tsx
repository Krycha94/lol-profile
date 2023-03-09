import SearchForm from "../SearchForm/SearchForm";
import styles from "./Home.module.scss";
import bg from "../../assets/bg.mp4";

const Home = () => {
	return (
		<>
			{/* mobilebg */}
			<div className={styles.backgroundMobile}>
				<div className={styles.overlay}></div>
			</div>
			{/* desktop bg*/}
			<div className={styles.backgroundDesktop}>
				<video autoPlay loop muted className={styles.video}>
					<source src={bg} type="video/mp4" />
				</video>
				<div className={styles.overlay}></div>
			</div>

			<SearchForm />
		</>
	);
};
export default Home;
