import type { ListProps } from "../List/types";

export interface InfiniteListProps extends ListProps {
	loadMore?: () => void;
}
