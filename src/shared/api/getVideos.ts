import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';
import { VideoResponse } from 'shared/types/videos';

export const getVideos = async (query: string) => {
	const { data }: AxiosResponse<VideoResponse> = await axiosInstance({
		method: 'GET',
		url: `/search`,
		params: {
			q: query,
			part: 'snippet',
			maxResults: 12
		},
	});

	return data;
};
