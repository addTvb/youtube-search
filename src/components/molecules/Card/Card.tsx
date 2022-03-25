import Placeholder from './placeholder.jpg';
import './Card.css';

// TODO add types
export const Card = ({ video, ...props }: any) => {
	// TODO add type
	const setVideoCover = (covers: any) => {
		return covers ? covers.medium.url : Placeholder;
	};
	const getVideoUrl = (videoId: string) => {
		return `https://www.youtube.com/watch?v=${videoId}`;
	};
	return (
		<a href={getVideoUrl(video.id.videoId)} target='_blank' rel='noopener noreferrer'>
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
