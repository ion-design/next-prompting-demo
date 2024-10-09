import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { motion } from 'framer-motion';

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
				<motion.main
					className="grow"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					{children}
				</motion.main>
			</body>
		</html>
	);
}