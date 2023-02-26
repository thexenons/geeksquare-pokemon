import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { generateTestComponent } from "@/utils/jest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import PokemonImage from "..";

const TestComponent = generateTestComponent<
	ComponentProps<typeof PokemonImage>
>(PokemonImage, FakePokemon);

describe("PokemonImage", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("id", () => {
			const id = 1;
			render(<TestComponent id={id} />);

			const image = document.querySelector(`img[src*="${id}"]`);
			expect(image).toBeInTheDocument();
		});

		it("name", () => {
			const name = "test-name";
			render(<TestComponent name={name} />);

			const nameElement = screen.getByAltText(name);
			expect(nameElement).toBeInTheDocument();
		});
	});
});
