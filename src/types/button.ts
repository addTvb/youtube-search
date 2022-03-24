export type ButtonTypes = 'submit' | 'cancel' | 'link' | 'icon';

export interface IButton {
	children?: any; //TODO change it
	type: ButtonTypes;
	onClick?: () => any;
	className?: string;
}
