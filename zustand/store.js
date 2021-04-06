import create from "zustand";

export const useStore = create((set) => ({
	login: false,
	setLogin: () => set((state) => ({ login: state.payload })),
}));
