import type { FC } from "react";
import { Children } from "react";
import styles from "./PokemonInfo.module.css";
import type { PokemonInfoProps } from "./types";
import { transformAbilitiesToString } from "./utils";

const PokemonInfo: FC<PokemonInfoProps> = (props) => {
	const { abilities, base_experience, height, order, weight } = props;

	const stats = {
		"Base experience": base_experience,
		Height: height,
		Order: order,
		Weight: weight,
		Abilities: transformAbilitiesToString(abilities),
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>More stats</div>
			<div className={styles.content}>
				{Children.toArray(
					Object.entries(stats).map(([key, value]) => (
						<div className={styles.row}>
							{key}: <span>{value}</span>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default PokemonInfo;
