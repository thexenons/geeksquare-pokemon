import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import type { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => (
	<header className={styles.header}>
		<h1 className={styles.headerLogoWrapper}>
			<Link href="/">
				<Logo className={styles.headerLogo} />
			</Link>
		</h1>
	</header>
);

export default Header;
