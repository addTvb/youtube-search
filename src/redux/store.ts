import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

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
			state.videos = [action.payload];
		},
		// removeTodo: (state, action: PayloadAction<number>) => {
		// 	state.todos = state.todos.filter(({ id }) => id !== action.payload);
		// },
	},
});

export const { addVideos } = videosSlice.actions;

// Store
const store = configureStore({
	reducer: {
		videos: videosSlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

// Selector
export const selectVideos = (state: RootState) => state.videos.videos;

export default store;
