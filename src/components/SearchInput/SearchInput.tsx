import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './SearchInput.css';

export const SearchInput = () => {
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

	const onSubmit = (data: ISearchForm) => {
		console.log(data);
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='search'>
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
