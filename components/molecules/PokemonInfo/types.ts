import type { ParsedPokemon } from "@/types/models";

export interface PokemonInfoProps {
	base_experience: ParsedPokemon["base_experience"];
	height: ParsedPokemon["height"];
	order: ParsedPokemon["order"];
	weight: ParsedPokemon["weight"];
	abilities: ParsedPokemon["abilities"];
}
