```tsx
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
				<main className="grow opacity-0 animate-fadeIn">
					{children}
				</main>
			</body>
		</html>
	);
}
```

In your `globals.css`, add the following CSS to define the `fadeIn` animation:

```css
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fadeIn {
	animation: fadeIn 0.8s ease-out forwards;
}
```