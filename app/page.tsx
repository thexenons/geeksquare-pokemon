import { getPokemons } from "@/providers/dataProvider/pokemons";
import HomePage from "./view";

export const metadata = {
	title: "Geeksquare Pokemons List",
	description: "Pokemons list by thexenons",
};

const Home = async () => {
	const initialPokemons = await getPokemons();

	return <HomePage initialData={{ pokemons: initialPokemons }} />;
};

export default Home;
