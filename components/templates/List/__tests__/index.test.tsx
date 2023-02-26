import { generateTestComponent } from "@/utils/jest";
import { render, screen } from "@testing-library/react";
import { ComponentProps, FC, PropsWithChildren } from "react";
import List from "..";

interface ItemComponentProps extends PropsWithChildren {
	index: number;
}
const ItemComponent: FC<ItemComponentProps> = ({ index = 0, children }) => (
	<div data-testid={`test-item-${index}`}>{children}</div>
);

const items: ItemComponentProps[] = [
	{
		index: 0,
		children: <div data-testid="test-children-0" />,
	},
	{
		index: 1,
		children: <div data-testid="test-children-1" />,
	},
];

const TestComponent = generateTestComponent<ComponentProps<typeof List>>(List, {
	ItemComponent,
	items,
});

describe("List", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("ItemComponent", () => {
			render(<TestComponent />);

			for (const item of items) {
				const children = screen.getByTestId(`test-item-${item.index}`);
				expect(children).toBeInTheDocument();
			}
		});

		it("items", () => {
			render(<TestComponent />);

			for (const item of items) {
				const children = screen.getByTestId(`test-children-${item.index}`);
				expect(children).toBeInTheDocument();
			}
		});
	});
});
