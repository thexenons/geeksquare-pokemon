import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import PokemonsList from "..";

const TestComponent = generateTestComponent<
	ComponentProps<typeof PokemonsList>
>(PokemonsList, { pokemons: [FakePokemon, FakePokemon] });

describe("PokemonsList", () => {
	it("Render", () => {
		render(<TestComponent />);
	});
});
