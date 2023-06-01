import React, { useContext, useEffect, useState } from "react";
import { PageChange } from ".";
import { motion } from "framer-motion";

export default function Body({ initialPage }) {
  const [page, setPage] = useContext(PageChange);
  const [HTML, setHTML] = useState();

  useEffect(() => {
    (async () => {
      setHTML(null);
      let p = page === "home" ? initialPage?.slice(0, -3) : page;
      const data = await fetch(`/docs/${p}.html`);
      const res = await data.text();
      setHTML(res);
    })();
  }, [page, initialPage]);

  const handleLoader = () => {
    if (!HTML) {
      return (
        <div className="load-container">
          <div className="loader">Loading...</div>
        </div>
      );
    }
    return (
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{ease:"easeInOut",duration:0.3}}
        className="body"
        dangerouslySetInnerHTML={{ __html: HTML }}
      />
    );
  };

  return handleLoader();
}
