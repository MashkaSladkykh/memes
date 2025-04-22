import { instance } from "../index.ts";

export const getMemes = async () => {
  const query = new URLSearchParams({
    "api-key": import.meta.env.VITE_API_KEY,
    query: "joke",
    number: "10",
  }).toString();
  const { data } = await instance().get<Memes>(`?${query}`);

  return data;
};

export interface Memes {
  memes: Meme[];
  available: number;
}

export interface Meme {
  description: string;
  url: string;
  type: string;
  width: number;
  Height: number;
  ratio: number;
}
