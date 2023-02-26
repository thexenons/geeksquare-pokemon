"use client";

import type { FC } from "react";
import { useMemo } from "react";
import type { HomePageProps } from "./types";

import PokemonsList from "@/components/organisms/PokemonsList";
import Container from "@/components/templates/Container";
import { getPokemons } from "@/providers/dataProvider/pokemons";
import type { GetList } from "@/types/api";
import type { ParsedPokemon } from "@/types/models";
import type { QueryFunction } from "react-query";
import { useInfiniteQuery } from "react-query";

const getNextPokemons: QueryFunction<
	GetList<ParsedPokemon>,
	"pokemons"
> = async ({ pageParam = 1 }) => getPokemons({ page: pageParam });

const HomePage: FC<HomePageProps> = (props) => {
	const {
		initialData: { pokemons },
	} = props;
	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
		"pokemons",
		getNextPokemons,
		{
			initialData: {
				pageParams: [1],
				pages: [pokemons],
			},
			getNextPageParam: (lastPage) => {
				if (!lastPage.next) return;
				const url = new URL(lastPage.next);
				const offset = url.searchParams.get("offset");
				const limit = url.searchParams.get("limit");
				const page = Number(offset) / Number(limit) + 1;
				return page;
			},
		}
	);
	const accumulatedPokemons = useMemo(
		() =>
			data?.pages.reduce(
				(acc: ParsedPokemon[], page) => [...acc, ...page.results],
				[]
			) || [],
		[data?.pages]
	);

	return (
		<Container>
			<PokemonsList
				pokemons={accumulatedPokemons}
				loadMore={hasNextPage ? fetchNextPage : undefined}
			/>
		</Container>
	);
};

export default HomePage;
