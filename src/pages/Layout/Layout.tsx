import { Header } from 'components';

import './Layout.css';

// TODO add type for children
export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<main className='layout'>{children}</main>
		</>
	);
};
