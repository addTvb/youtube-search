import { configureStore } from '@reduxjs/toolkit';

import { videosSlice } from './videoSlice';
import { favoritesSlice } from './favoritesSlice';
import { layoutSlice } from './layoutSlice';
import { querySlice } from './querySlice';

// Store
const store = configureStore({
	reducer: {
		videos: videosSlice.reducer,
		favorites: favoritesSlice.reducer,
		layout: layoutSlice.reducer,
		query: querySlice.reducer,
	},
});

// Actions
export const { addVideos } = videosSlice.actions;
export const { addFavorites } = favoritesSlice.actions;
export const { changeLayout } = layoutSlice.actions;
export const { changeQuery } = querySlice.actions;

type RootState = ReturnType<typeof store.getState>;
// Selector
export const selectVideos = (state: RootState) => state.videos.videos;
export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectLayout = (state: RootState) => state.layout;
export const selectQuery = (state: RootState) => {
	console.log(state.query);

	return state.query;
};

export default store;
