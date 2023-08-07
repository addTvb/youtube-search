import { create } from 'zustand';

interface QueryState {
	query: string;
	changeQuery: (query: string) => void;
	reset: () => void;
}

export const useInputQuery = create<QueryState>()((set) => ({
	query: '',
	changeQuery: (query) => {
		set({ query: query });
	},
	reset: () => set({ query: '' }),
}));
