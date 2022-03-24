import { getButtonClass, getButtonType } from 'utils';
import { IButton } from 'types/button';

import './Button.css';

// TODO add type for children
export const Button = (props: IButton) => {
	const { type, children } = props;

	return (
		<button {...props} className={getButtonClass(type)} type={getButtonType(type)}>
			{children}
		</button>
	);
};
