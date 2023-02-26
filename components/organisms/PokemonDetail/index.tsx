import PokemonBasicInfo from "@/components/molecules/PokemonBasicInfo";
import { PokemonBasicInfoVariant } from "@/components/molecules/PokemonBasicInfo/types";
import PokemonImage from "@/components/molecules/PokemonImage";
import PokemonInfo from "@/components/molecules/PokemonInfo";
import type { ParsedPokemon } from "@/types/models";
import type { FC } from "react";
import styles from "./PokemonDetail.module.css";

const PokemonDetail: FC<ParsedPokemon> = (props) => {
	const { id, name, types, abilities, base_experience, height, order, weight } =
		props;

	return (
		<div className={styles.wrapper}>
			<PokemonImage id={id} name={name} />
			<div>
				<div className={styles.info}>
					<PokemonBasicInfo
						name={name}
						types={types}
						variant={PokemonBasicInfoVariant.large}
					/>
					<PokemonInfo
						abilities={abilities}
						base_experience={base_experience}
						height={height}
						order={order}
						weight={weight}
					/>
				</div>
			</div>
		</div>
	);
};

export default PokemonDetail;
