import { Header } from 'components';

import './Layout.css';

// TODO add type for children
export const Layout = ({ children }: any) => {
	return (
		<div className='parent-layout'>
			<Header />
			<main className='layout'>{children}</main>
			<footer>
				Created by /
				<a
					href='https://github.com/addTvb'
					target='_blank'
					rel='noopener noreferrer'
				>
					{' '}
					addTvb
				</a>
				/
			</footer>
		</div>
	);
};
