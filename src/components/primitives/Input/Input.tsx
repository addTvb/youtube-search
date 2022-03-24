import { Controller } from 'react-hook-form';

import './Input.css';

// TODO add type for props
export const Input = ({ label, errorText, name, control, ...props }: any) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<label className='input'>
					{label}
					<input {...props} {...field} className='input__field' />
					<p className='input__error-text'>{errorText}</p>
				</label>
			)}
		/>
	);
};
