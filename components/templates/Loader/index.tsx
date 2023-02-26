import classNames from "classnames";
import { forwardRef } from "react";
import styles from "./Loader.module.css";
import type { LoaderProps } from "./types";

const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
	const { className = "" } = props;

	return <div ref={ref} className={classNames(styles.loader, className)} />;
});
Loader.displayName = "Loader";

export default Loader;
