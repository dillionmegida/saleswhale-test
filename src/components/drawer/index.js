import React from "react";
import styles from "./index.module.scss";

const Drawer = ({ children }) => (
	<div className={styles.drawer}>{children}</div>
);

export default Drawer;
