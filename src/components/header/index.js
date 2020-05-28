import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.brand}>
					<div className={styles.logo}>
						<img
							src="/assets/images/logo.svg"
							alt="Saleswhale logo"
						/>
					</div>
					<div className={styles.name}>
						<img
							src="/assets/images/wordmark.svg"
							alt="Saleswhale wordmark"
						/>
					</div>
				</div>

				<nav>
					<ul>
						<li>
							<NavLink activeClassName='textBold' to="#">Why Saleswhale?</NavLink>
						</li>
						<li>
							<NavLink activeClassName='textBold' to="#">Product</NavLink>
						</li>
						<li>
							<NavLink activeClassName='textBold' to="#">Company</NavLink>
						</li>
					</ul>
				</nav>
				<ul className={styles.others}>
					<li>
						<NavLink className={styles.login} to="#">
							Log In
						</NavLink>
					</li>
					<li>
						<NavLink className={`bgMain`} to="#">
							Get a Demo
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
