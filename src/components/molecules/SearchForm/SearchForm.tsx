import { useSelector } from 'react-redux';

import { SearchInput } from 'components';
import { selectVideos } from 'redux/store';

import './SearchForm.css';

export const SearchForm = () => {
	const videos = useSelector(selectVideos);
	const condition = videos.length !== 0 ? 'search-form_left-side' : '';
	return (
		<div className={`search-form ${condition}`}>
			<h1 className='search-form__title'>Поиск видео</h1>
			<SearchInput />
		</div>
	);
};
