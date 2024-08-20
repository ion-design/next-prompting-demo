import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ion design',
	description: 'Ship product at the speed of thought',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full">
			<body className={'flex min-h-full flex-col ' + inter.className}>
				<main className="grow">{children}</main>
			</body>
		</html>
	);
}
