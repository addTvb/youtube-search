import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getLoginData } from 'api/getLoginData';
import { Input, Button } from 'components/primitives';

import Logo from 'images/sibdev-logo.svg';
import './Login.css';

export const Login = () => {
	const navigate = useNavigate();

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
	const notifyError = () => toast.error('Неправильный логин или пароль!');

	const onSubmit = (data: ILoginForm) => {
		const { login, password }: ILoginForm = data;

		getLoginData().then((res: ILoginForm[]) => {
			let isLoginValid: boolean[] = [];

			res.forEach((item: ILoginForm) => {
				if (item.login === login && item.password === password) {
					isLoginValid.push(true);
				} else {
					isLoginValid.push(false);
				}
			});

			const even = (element: boolean) => element === true;

			if (isLoginValid.some(even)) {
				navigate('/search');
			} else {
				notifyError();
			}
		});
	};

	return (
		<div className='login-wrapper'>
			<form onSubmit={handleSubmit(onSubmit)} className='login'>
				<Toaster position='top-center' />
				<div className='login__header'>
					<img
						className='login__logo'
						src={Logo}
						alt='Логотип компании Sibdev'
					/>
					<h3 className='login__title'>Вход</h3>
				</div>
				<div className='login__body'>
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
				</div>
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
