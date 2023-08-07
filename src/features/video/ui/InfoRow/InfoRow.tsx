import { useEffect, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { GridIcon, ListIcon } from 'shared/icons';
import { LayoutIconFill } from 'shared/types/icon';

import './InfoRow.css';
import { useVideos } from 'entities/video/model/useVideos';
import { useInputQuery } from 'entities/video/model/useInputQuery';
import { useLayout } from 'features/video/model/useLayout';

export const InfoRow = () => {
	const [currentQuery, setCurrentQuery] = useState<string>('');
	const [gridIconColor, setGridIconColor] = useState<LayoutIconFill>('#272727');
	const [listIconColor, setListIconColor] = useState<LayoutIconFill>('#BBBBBB');

	const { setToCard, setToList } = useLayout();
	const { query } = useInputQuery();
	const { videos } = useVideos();

	const handleChangeLayout = (layoutType: 'card' | 'list') => {
		if (layoutType === 'card') {
			setToCard();
			setGridIconColor('#272727');
			setListIconColor('#BBBBBB');
		}
		if (layoutType === 'list') {
			setToList();
			setGridIconColor('#BBBBBB');
			setListIconColor('#272727');
		}
	};
	useEffect(() => {
		const condition = query && videos?.items.length !== 0 ? query : '';
		setCurrentQuery(condition);
	}, [videos]);

	return (
		<div className='info-row'>
			{currentQuery && (
				<p className='info-row__query'>
					Видео по запросу <span>«{currentQuery}»</span>
				</p>
			)}
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
