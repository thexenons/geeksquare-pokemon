import { getPokemonImage } from "../image";

describe("image", () => {
	it("getPokemonImage", () => {
		const result = getPokemonImage(1);
		expect(result).toBe(
			"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
		);
	});
});
