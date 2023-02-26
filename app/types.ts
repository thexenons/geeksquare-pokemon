import type { GetList } from "@/types/api";
import type { ParsedPokemon } from "@/types/models";

export interface HomePageProps {
	initialData: {
		pokemons: GetList<ParsedPokemon>;
	};
}
