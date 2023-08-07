import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputEvent } from 'shared/types/events';
import { useVideos } from 'entities/video/model/useVideos';
import { useInputQuery } from 'entities/video/model/useInputQuery';
import './SearchForm.css';

interface ISearchForm {
	query: string;
}

export const SearchForm = () => {
	const { handleSubmit, register } = useForm<ISearchForm>({
		defaultValues: {
			query: '',
		},
		resolver: yupResolver(schema),
	});
	const queryRegister = register('query', { required: true });

	const { changeQuery } = useInputQuery();
	const { fetchVideo } = useVideos();

	const handleChangeQuery = (e: InputEvent) => {
		queryRegister.onChange(e);
		changeQuery(e.target.value);
	};
	const onSubmit = ({ query }: ISearchForm) => fetchVideo(query);

	return (
		<div className='search-form'>
			<h1 className='search-form__title'>Поиск видео</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='search'>
				<div className='search__wrapper'>
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
				</div>
			</form>
		</div>
	);
};

const schema = yup.object({
	query: yup.string(),
});
