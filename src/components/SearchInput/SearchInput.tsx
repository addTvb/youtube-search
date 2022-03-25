import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { addVideos, selectVideos } from 'redux/store';
import searchVideo from 'api/searchVideo';

import './SearchInput.css';

export const SearchInput = () => {
	const videos = useSelector(selectVideos);
	const dispatch = useDispatch();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ISearchForm>({
		defaultValues: {
			query: '',
		},
		resolver: yupResolver(schema),
	});

	const notifyError = () => toast.error('Ничего не удалось найти🤷‍♂️');

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
			<div className='search__wrapper'>
				<input
					{...register('query')}
					className='search__input'
					type='text'
					placeholder='Что хотите посмотреть?'
				/>
				<button className='search__button' type='submit'>
					Найти
				</button>
			</div>
			<p className='search__error-text'>{errors.query?.message}</p>
		</form>
	);
};

interface ISearchForm {
	query: string;
}

const schema = yup.object({
	query: yup.string().required('Введите название видео'),
});
