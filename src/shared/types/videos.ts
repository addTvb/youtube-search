export interface VideoResponse {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: Video[];
}

export interface Video {
	kind: string;
	etag: string;
	id: {
		kind: KindType;
		channelId?: string;
		videoId?: string;
	};
	snippet: {
		publishedAt: Date;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: Date;
	};
}

export type KindType = 'youtube#channel' | 'youtube#video';
