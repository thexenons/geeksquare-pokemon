import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps, FC, PropsWithChildren } from "react";
import InfiniteList from "..";

interface ItemComponentProps extends PropsWithChildren {
	index: number;
}
const ItemComponent: FC<ItemComponentProps> = ({ index = 0, children }) => (
	<div data-testid={`test-item-${index}`}>{children}</div>
);
const loadMore = jest.fn();

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

const TestComponent = generateTestComponent<
	ComponentProps<typeof InfiniteList>
>(InfiniteList, {
	ItemComponent,
	items,
	loadMore,
});

describe("InfiniteList", () => {
	it("Render", () => {
		render(<TestComponent />);
	});

	describe("props", () => {
		it("loadMore", () => {
			const { container } = render(<TestComponent />);

			const loaderElement = container.querySelector(".loader");

			expect(loaderElement).toBeInTheDocument();
		});
	});
});
