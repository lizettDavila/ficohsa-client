//Resources
import React from "react";
import { useNavigate } from "react-router-dom";

//UI
import { motion } from "framer-motion";

function Card({article}) {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/items/${id}`);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
      className="bg-slate-300 rounded-md p-2 mb-5"
    >
      <div className="bg-neutral-50 rounded-md pb-2 min-h-full flex flex-col ">
        <img
          className="rounded-t-md h-40 w-full"
          src={article.image_url}
          alt="news"
        />
        <h3 className="p-2 text-lg font-bold">{article.title}</h3>
        <div className="m-2 mt-auto">
          <button className="text-center bont-bold bg-teal-700 p-2 rounded-md w-full" onClick={()=>handleDetail(article.uuid)}>
            Ver detalle
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
