import { BaseURL, DEFAULT_LIMIT, Endpoints } from "@/config/constants";
import type { Filters, GetList } from "@/types/api";
import { parseFilters } from "./utils";

const urlFetch = async <T = unknown>(url: string, filters?: Filters) => {
	let finalUrl = url;

	if (filters) finalUrl = `${url}?${parseFilters(filters)}`;

	const response = await fetch(finalUrl);
	if (!response.ok) throw new Error(response.statusText);

	const data: T = await response.json();
	return data;
};

const getList = async <T = unknown>(
	endpoint: Endpoints,
	filters: Filters = {
		limit: DEFAULT_LIMIT,
		page: 1,
	}
) => await urlFetch<GetList<T>>(`${BaseURL.REST}${endpoint}`, filters);

const get = async <T = unknown>(endpoint: Endpoints, id: number) =>
	await urlFetch<T>(`${BaseURL.REST}${endpoint}/${id}`);

const DataProvider = {
	urlFetch,
	getList,
	get,
};

export default DataProvider;
