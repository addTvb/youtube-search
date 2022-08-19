import { useSelector } from 'react-redux';

import { ListItem } from 'components/molecules/ListItem';
import { selectVideos } from 'redux/store';

import './ListLayout.css';

export const ListLayout = () => {
	const videos = useSelector(selectVideos);

	// TODO add type to video
	return (
		<div className='list-layout'>
			{videos.length !== 0 &&
				videos.map((video: any, index: number) => (
					<ListItem video={video} key={index} />
				))}
		</div>
	);
};
