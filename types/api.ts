export interface GetList<T = unknown> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

export interface Filters {
	limit?: number;
	page?: number;
}
