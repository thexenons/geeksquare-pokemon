import { generateTestComponent } from "@/utils/jest";
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import Container from "..";

const TestComponent = generateTestComponent<ComponentProps<typeof Container>>(
	Container,
	{}
);

describe("Container", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("children", () => {
			render(
				<TestComponent>
					<div data-testid="test-children" />
				</TestComponent>
			);

			const children = screen.getByTestId("test-children");
			expect(children).toBeInTheDocument();
		});
	});
});
