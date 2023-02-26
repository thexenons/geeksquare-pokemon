import classNames from "classnames";
import type { FC } from "react";
import styles from "./PokemonBasicInfo.module.css";
import type { PokemonBasicInfoProps } from "./types";
import { PokemonBasicInfoVariant } from "./types";
import { transformTypesToString } from "./utils";

const PokemonBasicInfo: FC<PokemonBasicInfoProps> = (props) => {
	const { name, types, variant = PokemonBasicInfoVariant.medium } = props;

	return (
		<div
			className={classNames(styles.content, {
				[styles.contentLarge]: variant === PokemonBasicInfoVariant.large,
				[styles.contentMedium]: variant === PokemonBasicInfoVariant.medium,
			})}
		>
			<h2 className={styles.title}>{name.toUpperCase()}</h2>
			<h3 className={styles.subtitle}>{transformTypesToString(types)}</h3>
		</div>
	);
};

export default PokemonBasicInfo;
