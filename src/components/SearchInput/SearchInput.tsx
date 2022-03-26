import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from 'components/primitives';
import { useLocalStorage } from 'hooks';
import {
	addVideos,
	selectVideos,
	changeQuery,
	addFavorites,
	selectQuery,
} from 'redux/store';

import searchVideo from 'api/searchVideo';
import { HeartIcon } from 'icons';
import { HeartIconFill } from 'types/icon';

import './SearchInput.css';
import { InputEvent } from 'types/events';

export const SearchInput = () => {
	const queryRed = useSelector(selectQuery);
	const videos = useSelector(selectVideos);
	const dispatch = useDispatch();

	const [fillColor, setFillColor] = useState<HeartIconFill>('none');
	const [favorites, setFavorites] = useLocalStorage('favorites', '');

	const { handleSubmit, register, getValues, watch } = useForm<ISearchForm>({
		defaultValues: {
			query: '',
		},
		resolver: yupResolver(schema),
	});
	const queryRegister = register('query', { required: true });

	useEffect(() => {
		const query = getValues('query');

		favorites.forEach((item: { text: string }) => {
			if (query === item.text && fillColor === 'none') setFillColor('#c5e4f9');
			else setFillColor('none');
		});
	}, [watch('query')]);

	const notifyError = () => toast.error('Ничего не удалось найти🤷‍♂️');

	const addToFavorites = () => {
		const query = getValues('query');

		if (query !== '') {
			setFillColor('#c5e4f9');
			addFavorites({ text: query });
			// add to localStorage
			setFavorites([...favorites, { text: query }]);
		}
	};

	const condition = videos.length !== 0 ? 'search__wrapper_full-width' : '';

	const handleChangeQuery = (e: InputEvent) => {
		queryRegister.onChange(e);
		dispatch(changeQuery(e.target.value));
	};
	const onSubmit = ({ query }: ISearchForm) => {
		searchVideo
			.get('/search', {
				params: {
					q: query,
				},
			})
			.then((res) => {
				if (res.data.items && res.data.items.length !== 0)
					dispatch(addVideos(res.data.items));
				else notifyError();
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='search'>
			<Toaster position='top-center' />
			<div className={`search__wrapper ${condition}`}>
				<input
					{...queryRegister}
					onChange={handleChangeQuery}
					className='search__input'
					type='text'
					placeholder='Что хотите посмотреть?'
				/>
				<button className='search__button' type='submit'>
					Найти
				</button>
				{videos.length !== 0 ? (
					<span className='search__favorites-icon'>
						<Button type='icon' onClick={addToFavorites}>
							<HeartIcon fill={fillColor} />
						</Button>
					</span>
				) : (
					<></>
				)}
			</div>
		</form>
	);
};

interface ISearchForm {
	query: string;
}

const schema = yup.object({
	query: yup.string(),
});
