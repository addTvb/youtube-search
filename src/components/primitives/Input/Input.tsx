import { useState } from 'react';

import { Controller } from 'react-hook-form';

import { Button } from 'components/primitives';
import { OpenEyeIcon, CloseEyeIcon } from 'icons';

import './Input.css';

// TODO add type for props
export const Input = ({ label, errorText, name, control, type, ...props }: any) => {
	const [isOpenEye, setIsOpenEye] = useState<boolean>(false);
	const [inputType, setInputType] = useState<'password' | 'text' | ''>('password');

	const handleChange = () => {
		setIsOpenEye(!isOpenEye);

		if (isOpenEye) setInputType('password');
		else setInputType('text');
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<div className='input'>
					<label>
						{label}
						<input
							{...props}
							{...field}
							className='input__field'
							type={type === 'password' ? inputType : type}
						/>
					</label>
					{/* Show pass icon */}
					{type === 'password' ? (
						<span className='input__eye-icon'>
							<Button type='icon' onClick={handleChange}>
								{isOpenEye ? <OpenEyeIcon /> : <CloseEyeIcon />}
							</Button>
						</span>
					) : (
						<></>
					)}
					{/* Error text */}
					<p className='input__error-text'>{errorText}</p>
				</div>
			)}
		/>
	);
};
