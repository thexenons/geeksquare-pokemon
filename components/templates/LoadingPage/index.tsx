import Logo from "@/components/atoms/Logo";
import type { FC } from "react";
import styles from "./LoadingPage.module.css";

const LoadingPage: FC = () => (
	<div className={styles.wrapper}>
		<Logo className={styles.image} />
	</div>
);

export default LoadingPage;
