import React from "react";
import styles from "./index.module.scss";

const Drawer = ({ children, show }) => (
	<div className={`${styles.drawer} ${show ? styles.show : styles.hide}`}>
		{children}
	</div>
);

export default Drawer;
