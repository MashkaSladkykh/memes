import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMemes, Meme } from "./api/getMemes";

import IndexPage from "@/pages/index";
import TablePage from "@/pages/table";
import CardsPage from "@/pages/cards";

function App() {
  const [data, setData] = useState<Meme[]>();

  useEffect(() => {
    (async () => {
      try {
        const res = await getMemes();

        setData(res.memes);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  console.log(data);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<CardsPage />} path="/cards" />
    </Routes>
  );
}

export default App;
