import { getYouTubeLink, setVideoCover } from 'shared/utils';
import { Video } from 'shared/types/videos';

import './Card.css';

interface CardProps {
	video: Video;
	isCardLayout: boolean;
}

export const Card = ({ video, isCardLayout }: CardProps) => {
	if (!isCardLayout) {
		return (
			<a href={getYouTubeLink(video.id)} target='_blank' rel='noopener noreferrer'>
				<div className='row'>
					<img
						src={setVideoCover(video.snippet.thumbnails.high.url)}
						alt={`Cover image for "${video.snippet.title}" video`}
						className='card__cover'
						width={video.snippet.thumbnails.medium.width}
						height={video.snippet.thumbnails.medium.height}
					/>
					<div className='row-info'>
						<p className='card__title'>{video.snippet.title}</p>
						<div className='card__footer'>
							<p className='card__channel'>{video.snippet.channelTitle}</p>
							<p className='card__views'>654 views</p>
						</div>
					</div>
				</div>
			</a>
		);
	}

	return (
		<a href={getYouTubeLink(video.id)} target='_blank' rel='noopener noreferrer'>
			<div className='card'>
				<img
					src={setVideoCover(video.snippet.thumbnails.high.url)}
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
		</a>
	);
};
