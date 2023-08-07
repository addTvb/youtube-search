import { ButtonTypes } from 'shared/types/button';

export const getButtonClass = (type: ButtonTypes) => {
	if (type === 'submit') return 'button button_submit';
	if (type === 'cancel') return 'button button_cancel';
	if (type === 'link') return 'button button_link';
	if (type === 'icon') return 'button_icon';
	return 'button';
};
