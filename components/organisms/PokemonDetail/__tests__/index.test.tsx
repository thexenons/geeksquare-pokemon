import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import PokemonDetail from "..";

const TestComponent = generateTestComponent<
	ComponentProps<typeof PokemonDetail>
>(PokemonDetail, FakePokemon);

describe("PokemonDetail", () => {
	it("Render", () => {
		render(<TestComponent />);
	});
});
