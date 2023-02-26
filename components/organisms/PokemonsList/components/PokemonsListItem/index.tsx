import PokemonBasicInfo from "@/components/molecules/PokemonBasicInfo";
import PokemonImage from "@/components/molecules/PokemonImage";
import type { ParsedPokemon } from "@/types/models";
import { getPokemonDetailRoute } from "@/utils/routes";
import Link from "next/link";
import type { FC } from "react";
import { memo } from "react";
import styles from "./PokemonsListItem.module.css";

const PokemonsListItem: FC<ParsedPokemon> = (props) => {
	const { id, name, types } = props;

	return (
		<Link href={getPokemonDetailRoute(id)} className={styles.link}>
			<div className={styles.wrapper}>
				<PokemonImage id={id} name={name} />
				<PokemonBasicInfo name={name} types={types} />
			</div>
		</Link>
	);
};

export default memo(PokemonsListItem);
