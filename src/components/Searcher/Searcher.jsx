//Resources
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

//Service
import { getInformation } from "../../services/services";

function Searcher({ setArticles, setArticle }) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (text !== "") {
      getData(text);
    } else {
      setError("Ingrese una palabra");
    }
  };
  const getData = async (text) => {
    setLoading(true);
    const response = await getInformation(text.toLowerCase());
    if(response.length > 0){
      setArticles(response.slice(0,3));
      navigate(`/items?search=${text}`);
    }else if(response.message === "No articles found"){
      setError("No se encontraron resultados");
    }else{
      setArticle(response);
      navigate(`/items/${response.uuid}`);  
    }
    setLoading(false);
  }

  return (
    <div className="pt-[30%] md:pt-[8%]">
      <h3 className="text-center text-2xl md:text-3xl pb-5 font-bold">
        Buscador de Noticias
      </h3>
      <p className="text-center text-[18px] mb-5">
        Ingresa la categoria o el id de una noticia para ver su detalle.
      </p>
      <div className="w-[100%] display: flex justify-center">
        <input
          name="searcher"
          type="text"
          className="text-black rounded-tl-md rounded-bl-md w-full lg:w-2/3 xl:w-2/5 h-11 p-5 text-center"
          placeholder="Ej: science, tech, general or id"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={
            !loading
              ? `rounded-tr-md rounded-br-md h-11 w-14 bg-slate-400 buttonload`
              : `rounded-tr-md rounded-br-md  h-11 w-14 bg-slate-400`
          }
          onClick={() => handleSearch()}
        >
          {!loading ? (
            <HiOutlineSearch className="text-white text-3xl m-auto" />
          ) : (
            <i className="fa fa-spinner fa-spin"></i>
          )}
        </button>
      </div>
      {error !== "" && (
        <p className="text-center text-rose-400 pt-3">{error}</p>
      )}
    </div>
  );
}

export default Searcher;
