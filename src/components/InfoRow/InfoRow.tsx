import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'components/primitives';
import { GridIcon, ListIcon } from 'icons';
import { LayoutIconFill } from 'types/icon';
import { changeLayout, selectLayout, selectQuery, selectVideos } from 'redux/store';

import './InfoRow.css';

export const InfoRow = () => {
	const lay = useSelector(selectLayout);
	const videos = useSelector(selectVideos);
	const query = useSelector(selectQuery);
	const dispatch = useDispatch();

	const [currentQuery, setCurrentQuery] = useState<string>('');
	const [gridIconColor, setGridIconColor] = useState<LayoutIconFill>('#272727');
	const [listIconColor, setListIconColor] = useState<LayoutIconFill>('#BBBBBB');

	const handleChangeLayout = (layoutType: 'card' | 'list') => {
		console.log(lay);

		if (layoutType === 'card') {
			dispatch(changeLayout(layoutType));
			console.log(lay);

			setGridIconColor('#272727');
			setListIconColor('#BBBBBB');
		}
		if (layoutType === 'list') {
			dispatch(changeLayout(layoutType));
			console.log(lay);
			setGridIconColor('#BBBBBB');
			setListIconColor('#272727');
		}
	};
	useEffect(() => {
		const condition = query && videos.length !== 0 ? query : '';
		setCurrentQuery(condition);
	}, [videos]);

	return (
		<div className='info-row'>
			<p className='info-row__query'>
				Видео по запросу <span>«{currentQuery}»</span>
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
