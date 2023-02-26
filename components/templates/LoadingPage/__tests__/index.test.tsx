import { generateTestComponent } from "@/utils/jest";
import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import LoadingPage from "..";

const TestComponent = generateTestComponent<ComponentProps<typeof LoadingPage>>(
	LoadingPage,
	{}
);

describe("LoadingPage", () => {
	it("Render", () => {
		render(<TestComponent />);
	});
});
