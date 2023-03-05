import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import List from "../List";
import Loader from "../Loader";
import styles from "./InfiniteList.module.css";
import type { InfiniteListProps } from "./types";

const InfiniteList: FC<InfiniteListProps> = (props) => {
	const { loadMore, ...rest } = props;
	const loaderRef = useRef<HTMLDivElement>(null);
	const entry = useIntersectionObserver(loaderRef, {});

	useEffect(() => {
		const isVisible = !!entry?.isIntersecting;

		if (isVisible) {
			loadMore?.();
		}
	}, [entry?.isIntersecting, loadMore]);

	return (
		<div>
			<List {...rest} />
			{loadMore && <Loader ref={loaderRef} className={styles.loader} />}
		</div>
	);
};

export default InfiniteList;
