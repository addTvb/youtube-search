import { Card } from 'features/video/ui/Card/Card';
import { Video } from 'shared/types/videos';
import { useVideos } from 'entities/video/model/useVideos';

import './CardLayout.css';
import { useLayout } from 'features/video/model/useLayout';
import clsx from 'clsx';

export const CardLayout = () => {
	const { videos } = useVideos();
	const { layout } = useLayout();
	const isCardLayout = layout === 'card';

	return (
		<div className={clsx(isCardLayout ? 'card-layout' : 'list-layout')}>
			{videos?.items.length !== 0 &&
				videos?.items.map((video: Video, index: number) => (
					<Card video={video} key={index} isCardLayout={isCardLayout} />
				))}
		</div>
	);
};
