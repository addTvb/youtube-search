import { useSelector } from 'react-redux';

import { CardLayout, InfoRow, ListLayout } from 'components';
import { selectLayout } from 'redux/store';

import './SearchResult.css';

export const SearchResult = () => {
	const layout = useSelector(selectLayout);
	return (
		<>
			<InfoRow />
			{layout === 'card' ? <CardLayout /> : <ListLayout />}
		</>
	);
};
