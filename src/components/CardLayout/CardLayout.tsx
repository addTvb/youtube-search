import { useSelector } from 'react-redux';

import { Card } from 'components/molecules/Card';
import { selectVideos } from 'redux/store';

import './CardLayout.css';

export const CardLayout = () => {
	const videos = useSelector(selectVideos);
	console.log(videos);

	// TODO add type to video
	return (
		<div className='card-layout'>
			{videos.length !== 0 &&
				videos.map((video: any, index: number) => (
					<Card video={video} key={index} />
				))}
		</div>
	);
};
