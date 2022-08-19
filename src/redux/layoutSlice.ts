import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'card';

export const layoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		changeLayout: (state, action: PayloadAction<string>) => {
			return (state = action.payload);
		},
	},
});
