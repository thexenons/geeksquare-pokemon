import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { Type } from "@/types/models";
import { generateTestComponent } from "@/utils/jest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import PokemonBasicInfo from "..";
import { transformTypesToString } from "../utils";

const TestComponent = generateTestComponent<
	ComponentProps<typeof PokemonBasicInfo>
>(PokemonBasicInfo, FakePokemon);

describe("PokemonBasicInfo", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("name", () => {
			const name = "test-name";
			render(<TestComponent name={name} />);

			const nameElement = screen.getByText(name.toUpperCase());
			expect(nameElement).toBeInTheDocument();
		});

		it("types", () => {
			const types: Type[] = [
				{
					name: "test-type-1",
					damage_relations: {
						double_damage_from: [],
						double_damage_to: [],
						half_damage_from: [],
						half_damage_to: [],
						no_damage_from: [],
						no_damage_to: [],
					},
					game_indices: [],
					generation: {
						name: "test-generation",
						url: "test-url",
					},
					id: 1,
					move_damage_class: {
						name: "test-move-damage-class",
						url: "test-url",
					},
					moves: [],
					pokemon: [],
					names: [],
				},
				{
					name: "test-type-2",
					damage_relations: {
						double_damage_from: [],
						double_damage_to: [],
						half_damage_from: [],
						half_damage_to: [],
						no_damage_from: [],
						no_damage_to: [],
					},
					game_indices: [],
					generation: {
						name: "test-generation",
						url: "test-url",
					},
					id: 2,
					move_damage_class: {
						name: "test-move-damage-class",
						url: "test-url",
					},
					moves: [],
					pokemon: [],
					names: [],
				},
			];

			render(<TestComponent types={types} />);

			const typesString = transformTypesToString(types);

			const typesElement = screen.getByText(typesString);
			expect(typesElement).toBeInTheDocument();
		});
	});
});
