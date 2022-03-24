import { Header } from 'components';

// TODO add type for children
export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<main className='layout'>{children}</main>
		</>
	);
};
