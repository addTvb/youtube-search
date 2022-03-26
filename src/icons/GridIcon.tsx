import { LayoutIconType } from 'types/icon';

export const GridIcon = ({ stroke = '#272727' }: LayoutIconType) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10 5H5V10H10V5Z'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M19 5H14V10H19V5Z'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M19 14H14V19H19V14Z'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10 14H5V19H10V14Z'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
