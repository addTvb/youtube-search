import { useSelector } from 'react-redux';

import { SearchForm, SearchResult } from 'components';
import { selectVideos } from 'redux/store';

import './SearchPage';

export const SearchPage = () => {
	const videos = useSelector(selectVideos);

	return (
		<div>
			<SearchForm />
			{videos.length !== 0 ? <SearchResult /> : <></>}
		</div>
	);
};
