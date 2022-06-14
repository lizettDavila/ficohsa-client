//Resources
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//Components
import Card from "../Card/Card";

//Service
import { getInformation } from "../../services/services";

//UI
import { BallTriangle } from "react-loader-spinner";

const Result = ({ articles, setArticles }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const getData = async (text) => {
    setLoading(true);
    const response = await getInformation(text.toLowerCase());
    if (response?.length > 0) {
      setArticles(response.slice(0,3));
    } else if (response?.message === "No articles found") {
      setArticles([]);
      navigate("/");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(searchParams.get("search"));
  }, [searchParams]);

  return (
    <>
      <h2 className="text-center font-black text-3xl mb-5">
        Los resultados de tu búsqueda son:
      </h2>
   
      {!!loading ? (
        <div className="w-full flex justify-center pt-5">
          <BallTriangle
            height="100"
            width="100"
            color="#4caf50"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div className="w-full lg:p-10 lg:grid grid-rows-1 grid-cols-4 gap-5 pt-[5%]">
             <Card article="hola"/>
          {articles.map((article) =>(
            <Card key={article.uuid} article={article} />
          ))}
        </div>
      )}
    </>
  );
};

export default Result;
