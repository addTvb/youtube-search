import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Video {
	id: number;
	done: boolean;
	text: string;
}

interface VideoSliceState {
	videos: Video[];
}

const initialState: VideoSliceState = {
	videos: [],
};

export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		// TODO add types
		addVideos: (state, action: PayloadAction<any>) => {
			state.videos = action.payload;
		},
	},
});
