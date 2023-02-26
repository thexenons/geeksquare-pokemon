import { Endpoints } from "@/config/constants";
import fetchMock from "jest-fetch-mock";
import DataProvider from "..";
import { FakePokemon } from "../pokemons/mocks/pokemon";

fetchMock.enableMocks();

beforeEach(() => {
	fetchMock.resetMocks();
});

describe("dataProvider", () => {
	it("urlFetch", async () => {
		fetchMock.mockResponseOnce(JSON.stringify(FakePokemon));

		const result = await DataProvider.urlFetch(
			"https://pokeapi.co/api/v2/pokemon/1",
			{
				limit: 60,
				page: 2,
			}
		);

		expect(result).toEqual(FakePokemon);
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://pokeapi.co/api/v2/pokemon/1?limit=60&offset=60"
		);
	});

	it("getList", async () => {
		fetchMock.mockResponseOnce(JSON.stringify(FakePokemon));

		const result = await DataProvider.getList(Endpoints.Pokemon, {
			limit: 60,
			page: 2,
		});

		expect(result).toEqual(FakePokemon);
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://pokeapi.co/api/v2/pokemon?limit=60&offset=60"
		);
	});

	it("get", async () => {
		fetchMock.mockResponseOnce(JSON.stringify(FakePokemon));

		const result = await DataProvider.get(Endpoints.Pokemon, 1);

		expect(result).toEqual(FakePokemon);
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect(fetchMock).toHaveBeenCalledWith(
			"https://pokeapi.co/api/v2/pokemon/1"
		);
	});
});
