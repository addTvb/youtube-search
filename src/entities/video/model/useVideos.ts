import { getVideos } from 'shared/api/getVideos';
import { VideoResponse } from 'shared/types/videos';
import { create } from 'zustand';

interface VideoState {
	videos?: VideoResponse;
	fetchVideo: (videos: string) => void;
}

export const useVideos = create<VideoState>()((set) => ({
	videos: undefined,
	fetchVideo: async (query) => {
		const data = await getVideos(query);
		set({ videos: await data });
	},
}));
