import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export const PageChange = React.createContext();

export default function Documentation() {
  const [HTMLList, setHTMLList] = useState();
  const [mdData, setMdData] = useState();
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch("docs/toc.json");
      const res = await data.json();
      setMdData(res);
      for (let i of res) {
        iterateObj(i);
      }
      setHTMLList(listItems);
    })();
  }, []);

  const listItems = [];
  let nest = 0;
  const iterateObj = (res) => {
    const value = Object.values(res)[0];
    const key = Object.keys(res)[0];

    if (Array.isArray(value)) {
      listItems.push(listItemData(key, nest, nest === 0 ? "dropdown" : "grouper"));
      nest++;
      for (let i of value) {
        iterateObj(i);
      }
      nest--;
      return;
    }

    listItems.push(listItemData(key, nest, "page", value));
    return;
  };

  let groupId = 0;
  const listItemData = (key, nest, type, path) => {
    if (nest === 0) groupId++;
    const item = {};
    item.name = key;
    item.nest = nest;
    item.type = type;
    item.path = path;
    item.groupId = groupId;
    return item;
  };

  const [page, setPage] = useState(1);

  return (
    <PageChange.Provider value={[page, setPage]}>
      <main className="documentation">
        <div className="documentation-container">
          <Sidebar mdData={mdData} />
          {/* <div className="body" dangerouslySetInnerHTML={{ __html: HTML }} /> */}
        </div>
      </main>
    </PageChange.Provider>
  );
}
