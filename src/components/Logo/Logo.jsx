//Resources
import React from "react";
import { motion } from "framer-motion";

//UI
import "./Logo.css";

function Logo() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  return (
    <div className="pb-10 h-24">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item"
      >
        <motion.path
          d="M 0 0 A 1 1 0 0 0 3.37 4.98 A 1 1 0 0 0 0.04 0.01 M 3.37 4.91 L 6.18 9.1 L 7.29 8.12 L 3.83 4.52 Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Logo;
