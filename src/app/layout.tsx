import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Billing System - Dashboard",
	description: "Painel de controlo do sistema de faturação",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
