export type EyeIconStroke = '#1390e5' | '#D1D1D1' | '#d1d1d1' | '#1390E5';
export type HeartIconFill = 'none' | '#c5e4f9' | '#C5E4F9';
export type LayoutIconFill = '#272727' | '#BBBBBB';

export interface IconType {
	fill?: string;
	stroke?: string;
}

export interface EyeIconType {
	fill?: 'none';
	stroke?: EyeIconStroke;
}

export interface HeartIconType {
	fill?: HeartIconFill;
	stroke?: '#1390e5' | '#1390E5';
}

export interface LayoutIconType {
	stroke: LayoutIconFill;
}
