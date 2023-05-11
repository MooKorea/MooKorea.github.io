import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Documentation() {
  const [HTMLList, setHTMLList] = useState();
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch("toc.txt");
      const res = await data.text();
      const parsedRes = JSON.parse(res).slice(2);
      const sidebarItems = [];
      parsedRes.forEach((e) => {
        if (!Array.isArray(e)) {
          sidebarItems.push(e);
          return;
        }
        e.forEach((r) => sidebarItems.push(r));
      });
      setHTMLList(parsedRes);
    })();
  }, []);

  const [page, setPage] = useState();
  const handlePageChange = (data) => {
    setPage(data.replaceAll("%", "").toLowerCase().replaceAll(" ", "-") + ".html");
  };

  const [HTML, setHTML] = useState();
  useEffect(() => {
    (async function fetchHTMLFile() {
      if (HTMLList === undefined) return;
      const data = await fetch(`docs/${page}`);
      if (data.status === 404) {
        setHTML(`${page.slice(0, -5)}.md does not exist in the github repository`);
        return;
      }
      const res = await data.text();
      setHTML(res);
    })();
  }, [HTMLList, page]);

  return (
    <main className="documentation">
      <div className="documentation-container">
        <Sidebar sidebarItems={HTMLList} handlePageChange={handlePageChange} />
        <div className="body" dangerouslySetInnerHTML={{ __html: HTML }} />
      </div>
    </main>
  );
}
