import styles from "./Match.module.scss";

const Match = () => {
	return (
		<li className={styles.match}>
			{/* match */}
			<div className={styles.match__info}>
				<h3>ARAM</h3>
				<p>2 months ago</p>
				<p>Defeat 21:01</p>
			</div>
			<div className={styles.match__champion}>
				{/* champion */}
				<div className={styles.match__championImage}>
					<img src="http://unsplash.it/400/200" alt="" />
					<span>18</span>
				</div>
				{/* spells */}
				<div className={styles.match__championSpells}>
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
				</div>
				{/* stats */}
				<div className={styles.match__stats}>
					<p>13 / 12 / 16</p>
					<p>2.4 KDA</p>
					<p>81 CS (3.9)</p>
				</div>
				{/* items */}
				<div className={styles.match__items}>
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
					<img src="http://unsplash.it/400/200" alt="" />
				</div>
				{/* players */}
				<div className={styles.match__players}>
					{/* team 1 */}
					<div className={styles.match__team}>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
					</div>
					{/* team 2 */}
					<div className={styles.match__team}>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
						<div>
							<img src="http://unsplash.it/400/200" alt="" />
							<p>Lotarix</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
export default Match;
