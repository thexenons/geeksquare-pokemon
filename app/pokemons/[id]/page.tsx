import { getPokemon } from "@/providers/dataProvider/pokemons";
import type { PageProps } from "@/types/page";
import { capitalizeString } from "@/utils/string";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PokemonPage from "./view";

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata> => {
	const pokemon = await getPokemon(params.id);

	return {
		title: capitalizeString(pokemon.name),
		description: `Detail page of ${capitalizeString(pokemon.name)}`,
	};
};

const Pokemon = async (props: PageProps) => {
	const {
		params: { id },
	} = props;

	const pokemon = await getPokemon(id);

	if (!pokemon) {
		notFound();
	}

	return <PokemonPage {...pokemon} />;
};

export default Pokemon;
