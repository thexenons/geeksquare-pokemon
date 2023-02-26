import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import Header from "..";

const TestComponent = generateTestComponent<ComponentProps<typeof Header>>(
	Header,
	{}
);

describe("Header", () => {
	it("Render", () => {
		render(<TestComponent />);
	});
});
