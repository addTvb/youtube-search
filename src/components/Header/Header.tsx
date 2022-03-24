import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Logo from 'images/sibdev-logo.svg';
import './Header.css';
import { Button } from 'components/primitives';

export const Header = () => {
	const location = useLocation();

	if (location.pathname === '/login') return null;

	const handleLogout = () => {
		console.log('logout');
		console.log('logout');
	};

	return (
		<header className='header'>
			<Link to='/search'>
				<img className='header__logo' src={Logo} alt='Логотип компании Sibdev' />
			</Link>

			<nav className='header__nav'>
				<Link
					to='/search'
					className={
						location.pathname === '/search'
							? 'header__link header__link_current'
							: 'header__link'
					}
				>
					Поиск
				</Link>
				<Link
					to='/favorites'
					className={
						location.pathname === '/favorites'
							? 'header__link header__link_current'
							: 'header__link'
					}
				>
					Избранное
				</Link>
			</nav>

			<Button type='link' onClick={handleLogout}>
				Выйти
			</Button>
		</header>
	);
};
