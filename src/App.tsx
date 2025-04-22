import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMemes, Meme } from "./api/getMemes";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

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
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
