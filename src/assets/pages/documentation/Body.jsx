import React, { useContext, useEffect, useState } from "react";
import { PageChange } from ".";

export default function Body({ initialPage }) {
  const [page, setPage] = useContext(PageChange);
  const [HTML, setHTML] = useState();

  useEffect(() => {
    (async () => {
      setHTML(null)
      let p = page === "home" ? initialPage?.slice(0, -3) : page;
      const data = await fetch(`/docs/${p}.html`);
      const res = await data.text();
      setHTML(res);
    })();
  }, [page, initialPage]);

  const handleLoader = () => {
    if (!page) {
      console.log("loading")
      return
    }
    return (<div className="body" dangerouslySetInnerHTML={{ __html: HTML }} />)
  }

  return handleLoader();
}
