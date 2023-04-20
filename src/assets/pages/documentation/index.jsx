import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";

export default function Documentation() {
  const [HTMLList, setHTMLList] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("names.txt");
      const res = await data.text();
      setHTMLList(res.split(",").filter((e) => e !== "README"));
    }
    fetchData();
  }, []);

  const [page, setPage] = useState(0);
  const handlePageChange = (index) => {
    setPage(index);
  };

  const [HTML, setHTML] = useState();
  useEffect(() => {
    async function fetchHTMLFile() {
      if (HTMLList === undefined) return;
      const data = await fetch(`docs/${HTMLList[page]}.html`);
      const res = await data.text();
      setHTML(res);
    }
    fetchHTMLFile();
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
