import { create } from 'zustand';

interface LayoutState {
	layout: 'card' | 'list';
	setToCard: () => void;
	setToList: () => void;
}

export const useLayout = create<LayoutState>()((set) => ({
	layout: 'card',
	setToCard: () => set({ layout: 'card' }),
	setToList: () => set({ layout: 'list' }),
}));
