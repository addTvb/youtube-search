import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		changeQuery: (state, action: PayloadAction<string>) => {
			return (state = action.payload);
		},
	},
});
