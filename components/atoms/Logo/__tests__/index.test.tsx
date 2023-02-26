import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import Logo from "..";

const TestComponent = generateTestComponent<ComponentProps<typeof Logo>>(
	Logo,
	{}
);

describe("Logo", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("className", () => {
			render(<TestComponent className="test" />);

			const logo = document.querySelector(".test");
			expect(logo).toBeInTheDocument();
		});
	});
});
