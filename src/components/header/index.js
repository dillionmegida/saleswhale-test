import React, { createRef } from "react";
import styles from "./index.module.scss";

import { NavLink } from "react-router-dom";
import Backdrop from "../backdrop";
import Drawer from "../drawer";
import { useState } from "react";

const links = [
	{
		name: "Why Wholesale",
		href: "#",
	},
	{ name: "Product", href: "#" },
	{ name: "Company", href: "#" },
];

const Nav = ({ navClass }) => (
	<nav className={navClass}>
		<ul>
			{links.map(({ name, href }) => (
				<li key={`nav-${name}`}>
					<NavLink className="textBold" to={href}>
						{name}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

const OtherLinks = ({ otherLinkClass }) => (
	<ul className={`${styles.others} ${otherLinkClass}`}>
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
);

const Header = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	const closeDrawerButtonRef = createRef();

    const transferFocusToDrawer = () => {
        closeDrawerButtonRef.current.focus()
    }

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<NavLink to="/" className={styles.brand}>
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
				</NavLink>

				<div
					className={styles.drawerToggler}
				>
					<button
						className={styles.open}
						onClick={() => setShowDrawer(true)}
					>
						<img
							src="/assets/images/hamburger-icon.png"
							alt="Open drawer button"
						/>
					</button>
				</div>

				<Nav navClass={styles.bigScreenNav} />
				<OtherLinks otherLinkClass={styles.bigScreen} />

				{showDrawer && (
					<>
						<Backdrop
							backdropClicked={() => setShowDrawer(false)}
						/>

						<Drawer>
							<div onLoad={transferFocusToDrawer} className={styles.drawer}>
								<div className={styles.drawerToggler}>
									<button
										ref={closeDrawerButtonRef}
										className={styles.close}
										onClick={() => setShowDrawer(false)}
									>
										<img
											src="/assets/images/close-icon.png"
											alt="Close drawer button"
										/>
									</button>
								</div>
								<Nav navClass={styles.smallScreenNav} />
								<OtherLinks
									otherLinkClass={styles.smallScreen}
								/>
							</div>
						</Drawer>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
