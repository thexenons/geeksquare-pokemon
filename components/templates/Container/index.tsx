import type { FC } from "react";
import styles from "./Container.module.css";
import type { ContainerProps } from "./types";

const Container: FC<ContainerProps> = (props) => {
	const { children } = props;

	return <div className={styles.container}>{children}</div>;
};

export default Container;
