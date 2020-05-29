import React from "react";
import styles from "./index.module.scss";

const Backdrop = ({ backdropClicked }) => (
	<div onClick={backdropClicked} className={styles.backdrop}></div>
);

export default Backdrop;
