import React, { useContext, useEffect, useState } from "react";
import { PageChange } from ".";
import { useLocation } from "react-router-dom";

export default function Body({initialPage}) {
  const [page, setPage] = useContext(PageChange);
  const [HTML, setHTML] = useState();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const pathName = location.pathname.slice(15).replaceAll('--','/')
      let p = location.pathname.slice(15) === "home" ? initialPage.slice(0,-3) : pathName
      const data = await fetch(`/docs/${p}.html`);
      const res = await data.text();
      setHTML(res);
    })();
  }, [page, location]);
  return <div className="body" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
