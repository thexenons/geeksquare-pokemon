"use client";

import { FC, useCallback, useMemo, useRef } from "react";
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

	const fetchCallLock = useRef(false);
	const loadMore = useCallback(() => {
		console.log("loadMore");
		if (hasNextPage && !fetchCallLock.current) {
			console.log("loadMore: fetchNextPage init");
			fetchCallLock.current = true;
			fetchNextPage().finally(() => {
				fetchCallLock.current = false;
				console.log("loadMore: fetchNextPage finally");
			});
		}
	}, [fetchNextPage, hasNextPage]);

	return (
		<Container>
			<PokemonsList pokemons={accumulatedPokemons} loadMore={loadMore} />
		</Container>
	);
};

export default HomePage;
