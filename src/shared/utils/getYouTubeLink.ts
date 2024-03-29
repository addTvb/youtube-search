import { KindType } from 'shared/types/videos';

export interface VideoDataType {
	kind: KindType;
	channelId?: string;
	videoId?: string;
}

export const getYouTubeLink = (videoData: VideoDataType) => {
	return videoData.kind === 'youtube#channel'
		? `https://www.youtube.com/channel/${videoData.channelId}`
		: `https://www.youtube.com/watch?v=${videoData.videoId}`;
};
