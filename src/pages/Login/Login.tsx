import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, Button } from 'components/primitives';

import Logo from 'images/sibdev-logo.svg';
import './Login.css';

export const Login = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ILoginForm>({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: ILoginForm) => console.log(data);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='login__header'>
					<img
						className='login__logo'
						src={Logo}
						alt='Логотип компании Sibdev'
					/>
					<div className='login__title'></div>
				</div>
				<Input
					control={control}
					type='text'
					name='login'
					label='Логин'
					errorText={errors.login?.message}
				/>
				<Input
					control={control}
					type='password'
					name='password'
					label='Пароль'
					errorText={errors.password?.message}
				/>
				<Button type='submit'>Войти</Button>
			</form>
		</div>
	);
};

interface ILoginForm {
	login: string;
	password: string;
}

const schema = yup.object({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/[a-zA-Z]/, 'Логин должен состоять только из латинских букв'),
	password: yup
		.string()
		.required('Введите пароль')
		.min(8, 'Пароль должен быть не меньше 8 символов')
		.matches(/[a-zA-Z]/, 'Пароль может состоять только из латинских букв'),
});