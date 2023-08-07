export type ButtonTypes = 'submit' | 'cancel' | 'link' | 'icon';

export interface IButton {
	children?: JSX.Element | string;
	type: ButtonTypes;
	onClick?: () => void;
	className?: string;
}
