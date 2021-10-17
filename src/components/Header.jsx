import React from 'react';
import { Link } from 'gatsby';
import { NAVIGATION } from '@/constants/navigation-constants';
import Logo from './Logo';

const Header = () => (
	<header>
		<Logo />
		<nav>
			{Object.values(NAVIGATION).map((navItem) => (
				<Link to={navItem.to}>{navItem.title}</Link>
			))}
		</nav>
	</header>
);

export default Header;
