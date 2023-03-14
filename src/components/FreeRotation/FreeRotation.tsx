import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getFreeChampions } from "../../api/summonersApi";
import { champions } from "../../utils/constants";
import Spinner from "../Spinner/Spinner";
import styles from "./FreeRotation.module.scss";

const FreeRotation = () => {
	const [freeChampionIds, setFreeChampionIds] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchFreeRotation = async () => {
		setIsLoading(true);
		try {
			const data = await getFreeChampions();
			setFreeChampionIds(data);
			setIsLoading(false);
			setIsError(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	};

	useEffect(() => {
		fetchFreeRotation();
	}, []);

	if (isLoading) return <Spinner />;

	if (isError) return <Navigate to="/error" />;

	return (
		<section className={styles.rotation}>
			<h2 className={styles.rotation__title}>Free Rotation</h2>
			<p className={styles.rotation__desc}>
				Champions you can play for free this week.
			</p>
			<ul className={styles.rotation__list}>
				{freeChampionIds.map((champId) => (
					<li key={champId} className={styles.rotation__item}>
						<figure>
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[champId]}_0.jpg`}
								alt={`${champions[champId]} champion`}
							/>
							<figcaption>{champions[champId]}</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</section>
	);
};
export default FreeRotation;
