import { DEFAULT_LIMIT } from "@/config/constants";
import type { Filters } from "@/types/api";

export const parseFilters = (filters: Filters) => {
	const { limit = DEFAULT_LIMIT, page = 1 } = filters;

	const offset = (page - 1) * limit;

	const params = new URLSearchParams();
	params.append("limit", limit.toString());
	params.append("offset", offset.toString());

	return params.toString();
};
