import { SearchResult } from 'entities/video/ui/SearchResult/SearchResult';
import { SearchForm } from 'entities/video/ui/SearchForm/SearchForm';

import './SearchPage.css';
import { useVideos } from 'entities/video/model/useVideos';

export const SearchPage = () => {
	const { videos } = useVideos();

	const centerLayout = () =>
		videos?.items.length !== 0 ? 'search-page' : 'search-page-center';

	return (
		<div className={centerLayout()}>
			<SearchForm />
			{videos?.items.length !== 0 ? <SearchResult /> : <></>}
		</div>
	);
};
