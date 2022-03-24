import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, Button } from 'components/primitives';
import { SearchInput } from 'components';

import './SearchForm.css';

export const SearchForm = () => {
	return (
		<div className='search-form'>
			<h1 className='search-form__title'>Поиск видео</h1>
			<SearchInput />
		</div>
	);
};
