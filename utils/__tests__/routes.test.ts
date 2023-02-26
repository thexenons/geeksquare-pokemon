import { getPokemonDetailRoute } from "../routes";

describe("routes", () => {
	it("getPokemonDetailRoute", () => {
		const result = getPokemonDetailRoute(1);
		expect(result).toBe("/pokemons/1");
	});
});
