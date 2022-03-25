import { configureStore } from '@reduxjs/toolkit';
import { videosSlice } from './videoSlice';
import { favoritesSlice } from './favoritesSlice';

// Store
const store = configureStore({
	reducer: {
		videos: videosSlice.reducer,
		favorites: favoritesSlice.reducer,
	},
});

// Actions
export const { addVideos } = videosSlice.actions;
export const { addFavorites } = favoritesSlice.actions;

type RootState = ReturnType<typeof store.getState>;
// Selector
export const selectVideos = (state: RootState) => state.videos.videos;
export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default store;
