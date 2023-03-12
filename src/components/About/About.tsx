import styles from "./About.module.scss";

const About = () => {
	return (
		<>
			<section className={styles.about}>
				<h2 className={styles.about__title}>About</h2>
				<div className={styles.about__desc}>
					<p>
						LoL Profile is website where you can check player profile and
						statistics, along with a detailed match history page.
					</p>
					<p>
						You can also check top 200 players on each server and see which
						champions are currently in free rotation.
					</p>
					<p>
						The website fetches data from{" "}
						<a href="https://developer.riotgames.com/" target={"_blank"}>
							Riot API
						</a>
						.
					</p>
					<p className={styles.about__policies}>
						LoL Profile isn't endorsed by Riot Games and doesn't reflect the
						views or opinions of Riot Games or anyone officially involved in
						producing or managing Riot Games properties. Riot Games, and all
						associated properties are trademarks or registered trademarks of
						Riot Games, Inc.
					</p>
				</div>
			</section>
			<footer className={styles.about__footer}>
				<span>© {new Date().getFullYear()} LoL Profile - Build by </span>
				<a href="https://github.com/Krycha94" target={"_blank"}>
					Krystian Kowalski.
				</a>
			</footer>
		</>
	);
};
export default About;
