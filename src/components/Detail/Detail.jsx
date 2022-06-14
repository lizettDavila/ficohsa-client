//Resources
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//UI
import { HiLink } from "react-icons/hi";
import { BallTriangle } from "react-loader-spinner";


//Service
import { getInformation } from "../../services/services";

function Detail({ article, setArticle }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    setLoading(true);
    const response = await getInformation(id);
    if (response) {
      setArticle(response);
    } else if (response?.message === "No articles found") {
      setArticle({});
      navigate("/");
    }
    setLoading(false);
  };
  useEffect(() => {
    getData(id);
  }, []);
  return (
    <>
      <h1 className="text-center text-white text-2xl lg:text-3xl font-black mb-5">
        Detalle de la noticia
      </h1>
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
        <div className="grid grid-cols-6">
          <div className="bg-slate-300 rounded-md p-2 md:col-start-2 md:col-span-4 col-start-1 col-span-6">
            <div className="bg-neutral-50 rounded-md pb-2">
              <div className="display:block lg:flex p-2 lg:p-5">
                <img
                  className="w-full lg:w-72 rounded-md lg:h-44 mt-5"
                  src={article.image_url}
                  alt="new image"
                />
                <div className="p-3">
                  <h3 className="text-justify font-black p-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-700 p-2">
                    <strong>Source:</strong> {article.source}
                  </p>
                  <p className="text-slate-700 p-2">
                    <strong>Leguaje: </strong> {article?.language?.toUpperCase()}
                  </p>
                  <a
                    className="text-green-700 p-2 underline display: flex"
                    href={article.url}
                  >
                    <HiLink className="mt-1 mr-1" /> Go to the site
                  </a>
                </div>
              </div>
              <div className="text-slate-700 px-5 text-justify pb-2">
                <p>{article.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
