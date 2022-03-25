import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favorite {
	text: string;
}

interface FavoriteSliceState {
	favorites: Favorite[];
}

const initialState: FavoriteSliceState = {
	favorites: [],
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorites: (state, action: PayloadAction<Favorite>) => {
			state.favorites = [
				...state.favorites,
				{
					text: action.payload.text,
				},
			];
		},
	},
});
