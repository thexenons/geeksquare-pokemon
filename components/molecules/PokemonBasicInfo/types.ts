import type { ParsedPokemon } from "@/types/models";

export enum PokemonBasicInfoVariant {
	large = "large",
	medium = "medium",
}

export interface PokemonBasicInfoProps {
	name: ParsedPokemon["name"];
	types: ParsedPokemon["types"];
	variant?: PokemonBasicInfoVariant;
}
