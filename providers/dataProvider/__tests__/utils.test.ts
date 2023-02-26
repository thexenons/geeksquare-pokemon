import { parseFilters } from "../utils";

describe("utils", () => {
	describe("parseUtils", () => {
		it("limit: 10, page: 1", () => {
			const result = parseFilters({ limit: 10, page: 1 });
			expect(result).toBe("limit=10&offset=0");
		});
		it("limit: 20, page: 1", () => {
			const result = parseFilters({ limit: 20, page: 1 });
			expect(result).toBe("limit=20&offset=0");
		});
		it("limit: 20, page: 2", () => {
			const result = parseFilters({ limit: 20, page: 2 });
			expect(result).toBe("limit=20&offset=20");
		});
		it("limit: 30, page: 2", () => {
			const result = parseFilters({ limit: 30, page: 2 });
			expect(result).toBe("limit=30&offset=30");
		});
		it("limit: 30, page: 3", () => {
			const result = parseFilters({ limit: 30, page: 3 });
			expect(result).toBe("limit=30&offset=60");
		});
	});
});
