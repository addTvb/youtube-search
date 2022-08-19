import { getYouTubeLink, setVideoCover } from 'utils';

import './Card.css';

// TODO add types
export const Card = ({ video, ...props }: any) => {
	return (
		<a href={getYouTubeLink(video.id)} target='_blank' rel='noopener noreferrer'>
			<abbr title={video.snippet.description}>
				<div className='card'>
					<img
						src={setVideoCover(video.snippet.thumbnails)}
						alt={`Cover image for "${video.snippet.title}" video`}
						className='card__cover'
						width={video.snippet.thumbnails.medium.width}
						height={video.snippet.thumbnails.medium.height}
					/>
					<p className='card__title'>{video.snippet.title}</p>
					<div className='card__footer'>
						<p className='card__channel'>{video.snippet.channelTitle}</p>
						<p className='card__views'>654 views</p>
					</div>
				</div>
			</abbr>
		</a>
	);
};
