import { LayoutIconType } from 'types/icon';

export const ListIcon = ({ stroke = '#BBBBBB' }: LayoutIconType) => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			{/* <g opacity='0.3'> */}
			<path
				d='M8 6H21'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8 12H21'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8 18H21'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3 6H3.01'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3 12H3.01'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3 18H3.01'
				stroke={stroke}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			{/* </g> */}
		</svg>
	);
};