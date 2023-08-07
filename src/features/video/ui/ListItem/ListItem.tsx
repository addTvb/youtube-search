import { getYouTubeLink, setVideoCover } from 'shared/utils';

import './ListItem.css';
import { Video } from 'shared/types/videos';

interface ListItemProps {
	video: Video;
}

export const ListItem = ({ video }: ListItemProps) => {
	return (
		<a href={getYouTubeLink(video.id)} target='_blank' rel='noopener noreferrer'>
			<abbr title={video.snippet.description}>
				<div className='list-item'>
					<img
						src={setVideoCover(video.snippet.thumbnails.high.url)}
						alt={`Cover image for "${video.snippet.title}" video`}
						className='list-item__cover'
						width={video.snippet.thumbnails.medium.width}
						height={video.snippet.thumbnails.medium.height}
					/>
					<div className='list-item__right-side'>
						<p className='list-item__title'>{video.snippet.title}</p>
						<p className='list-item__channel'>{video.snippet.channelTitle}</p>
						<p className='list-item__views'>654 views</p>
					</div>
				</div>
			</abbr>
		</a>
	);
};
