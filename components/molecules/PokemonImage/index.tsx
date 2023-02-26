import { getPokemonImage } from "@/utils/image";
import Image from "next/image";
import type { FC } from "react";
import styles from "./PokemonImage.module.css";
import type { PokemonImageProps } from "./types";

const PokemonImage: FC<PokemonImageProps> = (props) => {
	const { id, name } = props;

	return (
		<div className={styles.image}>
			<Image
				src={getPokemonImage(id)}
				alt={name}
				title={name}
				fill
				sizes="100vw"
			/>
		</div>
	);
};

export default PokemonImage;
