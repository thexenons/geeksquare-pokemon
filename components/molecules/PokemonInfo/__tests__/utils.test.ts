import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { transformAbilitiesToString } from "../utils";

describe("utils", () => {
	describe("transformAbilitiesToString", () => {
		it("not empty", () => {
			const abilitiesString = transformAbilitiesToString(FakePokemon.abilities);

			expect(abilitiesString).toBe("Overgrow, Chlorophyll");
		});

		it("empty", () => {
			const abilitiesString = transformAbilitiesToString([]);

			expect(abilitiesString).toBe("");
		});
	});
});
