import { useSelector } from 'react-redux';

import { SearchForm, SearchResult } from 'components';
import { selectVideos } from 'redux/store';

import './SearchPage.css';

export const SearchPage = () => {
	const videos = useSelector(selectVideos);

	const centerLayout = () =>
		videos.length !== 0 ? 'search-page' : 'search-page-center';

	return (
		<div className={centerLayout()}>
			<SearchForm />
			{videos.length !== 0 ? <SearchResult /> : <></>}
		</div>
	);
};
