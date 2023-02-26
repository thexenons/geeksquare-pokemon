import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { render } from "@testing-library/react";
import { ComponentProps, FC } from "react";
import PokemonsListItem from "..";

const TestComponent: FC<Partial<ComponentProps<typeof PokemonsListItem>>> = (
	props
) => <PokemonsListItem {...FakePokemon} {...props} />;

describe("PokemonsListItem", () => {
	it("Render", () => {
		render(<TestComponent />);
	});
});
