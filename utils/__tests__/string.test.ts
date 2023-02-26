import { capitalizeString } from "../string";

describe("string", () => {
	it("capitalizeString", () => {
		const result = capitalizeString("hello");
		expect(result).toBe("Hello");
	});
});
