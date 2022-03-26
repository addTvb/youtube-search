import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LayoutType = 'card' | 'list';

interface ILayout {
	layout: any;
}

const initialState: ILayout = {
	layout: 'card',
};
// TODO FIX THIS
export const layoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		changeLayout: (state, action: PayloadAction<ILayout>) => {
			console.log('action.payload', action.payload);
			state.layout = {
				layout: action.payload,
			};
		},
	},
});
