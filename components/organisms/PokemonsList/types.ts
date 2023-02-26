import { InfiniteListProps } from "@/components/templates/InfiniteList/types";
import { ParsedPokemon } from "@/types/models";

export interface PokemonsListProps {
	pokemons: ParsedPokemon[];
	loadMore?: InfiniteListProps["loadMore"];
}
