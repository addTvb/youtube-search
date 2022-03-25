import { useSelector } from 'react-redux';

import { SearchForm, SearchResult } from 'components';
import { selectVideos } from 'redux/store';

import './SearchPage.css';

export const SearchPage = () => {
	const videos = useSelector(selectVideos);

	const centerLayout = () => {
		if (videos.length !== 0) return 'search-page';
		return 'search-page-center';
	};
	console.log(centerLayout());

	return (
		<div className={centerLayout()}>
			<SearchForm />
			{videos.length !== 0 ? <SearchResult /> : <></>}
		</div>
	);
};
