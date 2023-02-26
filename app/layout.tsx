"use client";

import Header from "@/components/layout/Header";
import { queryClient } from "@/config/react-query";
import { Montserrat } from "next/font/google";
import "normalize.css";
import { QueryClientProvider } from "react-query";
import "./global.css";

const montserrat = Montserrat({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className={montserrat.className}>
			<body>
				<QueryClientProvider client={queryClient}>
					<Header />
					<main>{children}</main>
				</QueryClientProvider>
			</body>
		</html>
	);
}
