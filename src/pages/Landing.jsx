//Resources
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Searcher from "../components/Searcher/Searcher";
import Result from "../components/Result/Result";
import Detail from "../components/Detail/Detail";

function Landing() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Searcher setArticles={setArticles} setArticle={setArticle} />
          }
        />
        <Route
          path="/items"
          element={<Result articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/items/:id"
          element={<Detail article={article} setArticle={setArticle} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Landing;
