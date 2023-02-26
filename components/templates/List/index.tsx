import type { FC } from "react";
import { Children, memo } from "react";
import styles from "./List.module.css";
import type { ListProps } from "./types";

const List: FC<ListProps> = (props) => {
	const { title = "", ItemComponent, items } = props;

	return (
		<div className={styles.listWrapper}>
			{title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
			<ul className={styles.list}>
				{Children.toArray(
					items.map((item) => (
						<li>
							<ItemComponent {...item} />
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default memo(List);
