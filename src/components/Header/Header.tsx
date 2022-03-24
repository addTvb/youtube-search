import { useLocation } from 'react-router-dom';

import './Header.css';

export const Header = () => {
	const location = useLocation();

	if (location.pathname === '/login') return null;

	return (
		<div>
			<h1>Header</h1>
		</div>
	);
};
