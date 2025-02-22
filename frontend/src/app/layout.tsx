// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'leaflet/dist/leaflet.css';

import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
