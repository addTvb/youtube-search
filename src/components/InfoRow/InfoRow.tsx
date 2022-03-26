import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/primitives';
import { GridIcon, ListIcon } from 'icons';
import { LayoutIconFill } from 'types/icon';
import { changeLayout, selectLayout } from 'redux/store';

import './InfoRow.css';

export const InfoRow = ({ query }: any) => {
	const lay = useSelector(selectLayout);

	const [gridIconColor, setGridIconColor] = useState<LayoutIconFill>('#272727');
	const [listIconColor, setListIconColor] = useState<LayoutIconFill>('#BBBBBB');

	const handleChangeLayout = (layoutType: 'card' | 'list') => {
		if (layoutType === 'card') {
			changeLayout({
				layout: 'card',
			});
			console.log(lay);
			setGridIconColor('#272727');
			setListIconColor('#BBBBBB');
		}
		if (layoutType === 'list') {
			changeLayout({
				layout: 'list',
			});
			console.log(lay);

			setGridIconColor('#BBBBBB');
			setListIconColor('#272727');
		}
	};

	return (
		<div className='info-row'>
			<p className='info-row__query'>
				Видео по запросу <span>«{query}»</span>
			</p>
			<div className='info-row__layout-icons'>
				<Button type='icon' onClick={() => handleChangeLayout('list')}>
					<ListIcon stroke={listIconColor} />
				</Button>
				<Button type='icon' onClick={() => handleChangeLayout('card')}>
					<GridIcon stroke={gridIconColor} />
				</Button>
			</div>
		</div>
	);
};
