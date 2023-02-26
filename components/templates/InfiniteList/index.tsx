import useElementPosition from "@/hooks/useElementPosition";
import useWindowScroll from "@/hooks/useWindowScroll";
import useWindowSize from "@/hooks/useWindowSize";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import List from "../List";
import Loader from "../Loader";
import styles from "./InfiniteList.module.css";
import type { InfiniteListProps } from "./types";

// Threshold in pixels
const threshold = 100;

const InfiniteList: FC<InfiniteListProps> = (props) => {
	const { loadMore, ...rest } = props;
	const { height: windowHeight } = useWindowSize();
	const { y: scrollY } = useWindowScroll();

	const [setRefPosition, loaderPosition] = useElementPosition();

	const lastLoadingPosition = useRef(0);
	useEffect(() => {
		if (!loaderPosition.top || !windowHeight || !loadMore) return;

		const bottomOfPage = windowHeight + scrollY;
		const targetScrollToLoadMore = loaderPosition.top - threshold;

		if (
			lastLoadingPosition.current !== targetScrollToLoadMore &&
			bottomOfPage >= targetScrollToLoadMore
		) {
			lastLoadingPosition.current = targetScrollToLoadMore;
			loadMore();
		}
	});

	return (
		<div>
			<List {...rest} />
			{loadMore && <Loader ref={setRefPosition} className={styles.loader} />}
		</div>
	);
};

export default InfiniteList;
