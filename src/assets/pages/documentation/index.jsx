import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

export const PageChange = React.createContext();

export default function Documentation({page, setPage}) {
  const [mdData, setMdData] = useState();
  const [initialPage, setInitialPage] = useState();
  let listItems = []
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch("/docs/toc.json");
      const res = await data.json();
      setMdData(res);
      for (let i of res) {
        defaultFirstItem(i)
      }
      setInitialPage(Object.values(listItems[0])[0])
    })();
  }, []);

  const defaultFirstItem = (data) => {
    const value = Object.values(data)[0];
    if (Array.isArray(value)) {
      for (let i of value) {
        defaultFirstItem(i)
      }
      return
    }
    listItems.push(data)
  }

  return (
    <PageChange.Provider value={[page, setPage]}>
      <main className="documentation">
        <div className="documentation-container">
          <Sidebar mdData={mdData} />
          <Body initialPage={initialPage}/>
        </div>
      </main>
    </PageChange.Provider>
  );
}
