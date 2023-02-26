import { Endpoints } from "@/config/constants";
import DataProvider from "@/providers/dataProvider";
import type { Filters, GetList } from "@/types/api";
import type {
	Ability,
	NamedAPIResource,
	NamedAPIResourceList,
	ParsedPokemon,
	Pokemon,
	Type,
} from "@/types/models";

export const parsePokemonTypes = async (pokemon: Pokemon): Promise<Type[]> => {
	const parsedPokemonTypes = await Promise.all(
		pokemon.types.map(async (type) => {
			const typeDetail = await DataProvider.urlFetch<Type>(type.type.url);
			return typeDetail;
		})
	);
	return parsedPokemonTypes;
};

export const parsePokemonAbilities = async (
	pokemon: Pokemon
): Promise<Ability[]> => {
	const parsedPokemonAbilities = await Promise.all(
		pokemon.abilities.map(async (ability) => {
			const abilityDetail = await DataProvider.urlFetch<Ability>(
				ability.ability.url
			);
			return abilityDetail;
		})
	);
	return parsedPokemonAbilities;
};

export const parsePokemon = async (
	pokemon: Pokemon
): Promise<ParsedPokemon> => {
	const [pokemonTypes, pokemonAbilities] = await Promise.all([
		parsePokemonTypes(pokemon),
		parsePokemonAbilities(pokemon),
	]);
	return { ...pokemon, types: pokemonTypes, abilities: pokemonAbilities };
};

export const parsePokemons = async (
	pokemons: NamedAPIResourceList
): Promise<GetList<ParsedPokemon>> => {
	const parsedPokemons = await Promise.all(
		pokemons.results.map(async (pokemon) => {
			const pokemonDetail = await DataProvider.urlFetch<Pokemon>(pokemon.url);
			return await parsePokemon(pokemonDetail);
		})
	);

	return { ...pokemons, results: parsedPokemons };
};

export const getPokemons = async (filters?: Filters) => {
	const pokemonsList = await DataProvider.getList<NamedAPIResource>(
		Endpoints.Pokemon,
		filters
	);

	return await parsePokemons(pokemonsList);
};

export const getPokemon = async (id: number) => {
	const pokemon = await DataProvider.get<Pokemon>(Endpoints.Pokemon, id);

	return await parsePokemon(pokemon);
};
