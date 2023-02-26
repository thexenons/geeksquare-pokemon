import Image from "next/image";
import type { FC } from "react";
import type { LogoProps } from "./types";

const Logo: FC<LogoProps> = (props) => {
	const { className = "" } = props;

	return (
		<Image
			className={className}
			src="/img/logo.png"
			alt="Geeksquare"
			title="Geeksquare"
			width={165}
			height={23}
		/>
	);
};

export default Logo;
