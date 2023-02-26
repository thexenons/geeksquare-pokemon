import { useState } from "react";

import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface WindowScroll {
	x: number;
	y: number;
}

function useWindowScroll(): WindowScroll {
	const [windowScroll, setWindowScroll] = useState<WindowScroll>({
		x: 0,
		y: 0,
	});

	const handleScroll = () => {
		setWindowScroll({
			x: window.scrollX,
			y: window.scrollY,
		});
	};

	useEventListener("resize", handleScroll);
	useEventListener("scroll", handleScroll);

	// Set size at the first client-side load
	useIsomorphicLayoutEffect(() => {
		handleScroll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return windowScroll;
}

export default useWindowScroll;
