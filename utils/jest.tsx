import { ComponentProps, FC } from "react";

export function generateTestComponent<Props = any>(
	Component: FC<Props>,
	data: Props
) {
	const TestComponent: FC<Partial<ComponentProps<typeof Component>>> = (
		props
	) => <Component {...data} {...props} />;

	return TestComponent;
}
