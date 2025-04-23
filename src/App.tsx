import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { getMemes, Meme } from "./api/getMemes";
import { useAppDispatch } from "./store/hooks";
import { setMemes } from "./store/memes";

import IndexPage from "@/pages/index";
import TablePage from "@/pages/table";
import CardsPage from "@/pages/cards";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAllMemes = async () => {
      const res = await getMemes();

      dispatch(setMemes(res.memes));
    };

    getAllMemes();
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<CardsPage />} path="/cards" />
    </Routes>
  );
}

export default App;
