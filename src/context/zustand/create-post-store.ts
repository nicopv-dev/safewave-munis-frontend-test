import { ImageFile } from "@/types/image";
import { create } from "zustand";

interface State {
  content: string;
  images: ImageFile[];
}

interface Action {
  setContent: (content: string) => void;
  addImage: (image: ImageFile) => void;
  setImages: (images: ImageFile[]) => void;
  // removeImage: (image: ImageFile) => void;
}

const createPostStore = create<State & Action>((set) => ({
  content: "",
  images: [],

  setContent: (content) => set({ content }),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
  setImages: (images) => set({ images }),
  // removeImage: (image) => set((state) => ({ images: state.images.filter((i) => i !== image) })),
}));

export const useCreatePost = createPostStore;
