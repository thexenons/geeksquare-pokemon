import { useCallback, useState } from "react";

import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface Position {
	top: number;
	left: number;
}

function useElementPosition<T extends HTMLElement = HTMLDivElement>(): [
	(node: T | null) => void,
	Position
] {
	// Mutable values like 'ref.current' aren't valid dependencies
	// because mutating them doesn't re-render the component.
	// Instead, we use a state as a ref to be reactive.
	const [ref, setRef] = useState<T | null>(null);
	const [position, setPosition] = useState<Position>({
		top: 0,
		left: 0,
	});

	// Prevent too many rendering using useCallback
	const handlePosition = useCallback(() => {
		setPosition({
			top: ref?.offsetTop || 0,
			left: ref?.offsetLeft || 0,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref?.offsetTop, ref?.offsetLeft]);

	useEventListener("resize", handlePosition);
	useIsomorphicLayoutEffect(() => {
		handlePosition();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref?.offsetTop, ref?.offsetLeft]);

	return [setRef, position];
}

export default useElementPosition;
