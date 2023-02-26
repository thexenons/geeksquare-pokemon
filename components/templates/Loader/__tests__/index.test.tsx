import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import Loader from "..";

const TestComponent = generateTestComponent<ComponentProps<typeof Loader>>(
	Loader,
	{}
);

describe("Loader", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("className", () => {
			const className = "test";
			const { container } = render(<TestComponent className={className} />);

			const classNameElement = container.querySelector(`.${className}`);
			expect(classNameElement).toBeInTheDocument();
		});
	});
});
