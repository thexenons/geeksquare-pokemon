import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { generateTestComponent } from "@/utils/jest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import PokemonInfo from "..";
import { transformAbilitiesToString } from "../utils";

const TestComponent = generateTestComponent<ComponentProps<typeof PokemonInfo>>(
	PokemonInfo,
	FakePokemon
);

describe("PokemonInfo", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("base_experience", () => {
			const baseExperience = 9999;
			render(<TestComponent base_experience={baseExperience} />);

			const baseExperienceElement = screen.getByText(baseExperience);
			expect(baseExperienceElement).toBeInTheDocument();
		});

		it("height", () => {
			const height = 9999;
			render(<TestComponent height={height} />);

			const heightElement = screen.getByText(height);
			expect(heightElement).toBeInTheDocument();
		});

		it("order", () => {
			const order = 9999;
			render(<TestComponent order={order} />);

			const orderElement = screen.getByText(order);
			expect(orderElement).toBeInTheDocument();
		});

		it("weight", () => {
			const weight = 9999;
			render(<TestComponent weight={weight} />);

			const weightElement = screen.getByText(weight);
			expect(weightElement).toBeInTheDocument();
		});

		it("abilities", () => {
			const abilities = FakePokemon.abilities;
			render(<TestComponent abilities={abilities} />);

			const abilitiesString = transformAbilitiesToString(abilities);

			const abilitiesStringElement = screen.getByText(abilitiesString);
			expect(abilitiesStringElement).toBeInTheDocument();
		});
	});
});
