import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import { Meme, Memes } from "@/api/getMemes/index.ts";

export interface MemesState {
  memes?: Meme[];
  meme?: Meme;
  selectedMeme?: Meme;
}

const initialState: MemesState = {
  memes: [],
  meme: undefined,
  selectedMeme: undefined,
};

export const memesSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    setMemes: (state, action: PayloadAction<Meme[]>) => {
      state.memes = action.payload;
    },
    setSelectedMeme: (state, action: PayloadAction<Meme>) => {
      state.selectedMeme = action.payload;
    },
    setMeme: (state, action: PayloadAction<Meme | undefined>) => {
      state.meme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMeme, setSelectedMeme, setMemes } = memesSlice.actions;

export default memesSlice.reducer;
