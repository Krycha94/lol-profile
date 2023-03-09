import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../../utils/constants";
import styles from "./Header.module.scss";

const Header = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef<HTMLDivElement>(null!);
	const linksRef = useRef<HTMLElement>(null!);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = `0px`;
		}
	}, [showLinks]);

	return (
		<header className={styles.header}>
			<div className={styles.header__center}>
				<div className={styles.header__nav}>
					<Link to="/">
						<h1>LoL Profile</h1>
					</Link>

					<button
						className={styles.header__hamburger}
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>

				<div className={styles.header__linksContainer} ref={linksContainerRef}>
					<nav className={styles.header__links} ref={linksRef}>
						{navLinks.map((link) => (
							<NavLink
								key={link.id}
								to={link.url}
								onClick={() => setShowLinks(false)}
							>
								{link.text}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Header;
