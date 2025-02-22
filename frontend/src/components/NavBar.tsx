'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import TransitionLink from '@/components/TransitionLink';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/darkmode-toggle';
import logo from '@/components/images/smartcents.png';

export function NavBar() {
	const pathname = usePathname();
	const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
	const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
	const [isAboutDropDownHovered, setIsAboutDropdownHovered] = useState(false);
	const [deviceType, setDeviceType] = useState<'mobile' | 'ipad' | 'desktop'>(
		'desktop'
	);

	useEffect(() => {
		const userAgent =
			typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
		const isIPad = /iPad/i.test(userAgent) && 'ontouchend' in document;
		const isMobile = /iPhone|iPod|Android/i.test(userAgent) && !isIPad;

		if (isMobile) {
			setDeviceType('mobile');
		} else if (isIPad) {
			setDeviceType('ipad');
		} else {
			setDeviceType('desktop');
		}
	}, []);

	useEffect(() => {
		if (deviceType === 'mobile') setIsAboutDropdownOpen(true);
		else if (deviceType !== 'ipad')
			setIsAboutDropdownOpen(isAboutUsHovered || isAboutDropDownHovered);
	}, [isAboutUsHovered, isAboutDropDownHovered]);

	return (
		<>
			<header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-[1000]'>
				<Link href='/' className='flex items-center'>
					<Image
						src={logo}
						width={500}
						height={500}
						alt='SmartCents'
						className='h-8 w-auto transition-transform duration-300 hover:scale-110'
					/>
				</Link>
				<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
					<TransitionLink
						href='/'
						className={`${
							pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Home
					</TransitionLink>
					<div
						className='relative'
						onMouseEnter={() => {
							setIsAboutUsHovered(true);
							setIsAboutDropdownOpen(true);
						}}
						onMouseLeave={() => {
							setTimeout(() => {
								setIsAboutUsHovered(false);
							}, 100);
						}}
						onClick={() => {
							if (deviceType === 'ipad')
								setIsAboutDropdownOpen(!isAboutDropdownOpen);
						}}
					>
						<button
							className={`${
								pathname === '/about' ||
								pathname === '/about/team' ||
								pathname === '/about/mission'
									? 'text-foreground'
									: 'text-muted-foreground'
							}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
						>
							About Us
						</button>
						<div
							className={`absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-950 border rounded shadow-lg transition-opacity duration-300 transform ${
								isAboutDropdownOpen
									? 'opacity-100 scale-100'
									: 'opacity-0 scale-100 pointer-events-none'
							}`}
							onMouseEnter={() => setIsAboutDropdownHovered(true)}
							onMouseLeave={() => setIsAboutDropdownHovered(false)}
						>
							<TransitionLink
								href='/about/team'
								className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
							>
								Our Team
							</TransitionLink>
							<TransitionLink
								href='/about/mission'
								className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
							>
								Our Mission
							</TransitionLink>
						</div>
					</div>
					<TransitionLink
						href='/resources'
						className={`${
							pathname === '/resources'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Resources
					</TransitionLink>
					<TransitionLink
						href='/partners'
						className={`${
							pathname === '/partners'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Partners
					</TransitionLink>
					<TransitionLink
						href='/contact'
						className={`${
							pathname === '/contact'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Contact Us
					</TransitionLink>
				</nav>
				<div className='ml-auto'>
					<ModeToggle />
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='shrink-0 md:hidden'
						>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<nav className='grid gap-6 text-lg font-medium'>
							<TransitionLink
								href='/'
								className={`${
									pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Home
							</TransitionLink>
							<div className='relative'>
								<button
									className={`${
										pathname === '/about' ||
										pathname === '/about/team' ||
										pathname === '/about/mission'
											? 'text-foreground'
											: 'text-muted-foreground'
									}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
								>
									About Us
								</button>
								<div
									className={
										'transition-transform duration-300 hover:text-foreground hover:scale-110 opacity-100 scale-100'
									}
								>
									<TransitionLink
										href='/about/team'
										className={`${
											pathname === '/about/team'
												? 'text-foreground'
												: 'text-muted-foreground'
										}  block px-4 py-2 text-sm transition-transform duration-300 hover:text-foreground hover:scale-110`}
									>
										Our Team
									</TransitionLink>
									<TransitionLink
										href='/about/mission'
										className={`${
											pathname === '/about/mission'
												? 'text-foreground'
												: 'text-muted-foreground'
										}  block px-4 py-2 text-sm transition-transform duration-300 hover:text-foreground hover:scale-110`}
									>
										Our Mission
									</TransitionLink>
								</div>
							</div>
							<TransitionLink
								href='/resources'
								className={`${
									pathname === '/resources'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Resources
							</TransitionLink>
							<TransitionLink
								href='/partners'
								className={`${
									pathname === '/partners'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Partners
							</TransitionLink>
							<TransitionLink
								href='/contact'
								className={`${
									pathname === '/contact'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Contact Us
							</TransitionLink>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</>
	);
}