import { getButtonClass, getButtonType } from 'shared/utils';
import { IButton } from 'shared/types/button';

import './Button.css';

export const Button = (props: IButton) => {
	const { type, children } = props;

	return (
		<button {...props} className={getButtonClass(type)} type={getButtonType(type)}>
			{children}
		</button>
	);
};
