import { Header } from 'shared/ui/Header/Header';

import './Layout.css';

interface LayoutProps {
	children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='parent-layout'>
			<Header />
			<main className='layout'>{children}</main>
			<footer>
				<a
					href='https://github.com/addTvb'
					target='_blank'
					rel='noopener noreferrer'
				>
					Source Code 
				</a>
			</footer>
		</div>
	);
};
