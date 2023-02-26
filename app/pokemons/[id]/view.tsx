import PokemonDetail from "@/components/organisms/PokemonDetail";
import Container from "@/components/templates/Container";
import type { ParsedPokemon } from "@/types/models";
import type { FC } from "react";

const PokemonPage: FC<ParsedPokemon> = (props) => (
	<Container>
		<PokemonDetail {...props} />
	</Container>
);

export default PokemonPage;
