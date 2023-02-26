import { FakePokemon } from "@/providers/dataProvider/pokemons/mocks/pokemon";
import { transformTypesToString } from "../utils";

describe("utils", () => {
	describe("transformTypesToString", () => {
		it("not empty", () => {
			const typesString = transformTypesToString(FakePokemon.types);

			expect(typesString).toBe("Grass, Poison");
		});

		it("empty", () => {
			const typesString = transformTypesToString([]);

			expect(typesString).toBe("");
		});
	});
});
