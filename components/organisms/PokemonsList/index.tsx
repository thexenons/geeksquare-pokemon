import PokemonsListItem from "@/components/organisms/PokemonsList/components/PokemonsListItem";
import InfiniteList from "@/components/templates/InfiniteList";
import type { FC } from "react";
import type { PokemonsListProps } from "./types";

const PokemonsList: FC<PokemonsListProps> = (props) => {
	const { pokemons, loadMore } = props;

	return (
		<InfiniteList
			title="Pokemons"
			items={pokemons}
			ItemComponent={PokemonsListItem}
			loadMore={loadMore}
		/>
	);
};

export default PokemonsList;
