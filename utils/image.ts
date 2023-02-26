export const getPokemonImage = (id: number) =>
	`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
		id
	).padStart(3, "0")}.png`;
