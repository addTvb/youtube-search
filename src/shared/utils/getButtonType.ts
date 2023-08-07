import { ButtonTypes } from 'shared/types/button';

export const getButtonType = (type: ButtonTypes) => {
	if (type === 'submit') return 'submit';
	else return 'button';
};
