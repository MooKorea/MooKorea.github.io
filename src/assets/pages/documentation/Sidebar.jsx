import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarCollapseContainer from "./SidebarCollapseContainer";

export default function Sidebar({ mdData }) {

  //loop through TOC
  const handleSidebarItems = (data, index) => {

    //create nested container if value is array
    if (Array.isArray(Object.values(data)[0])) {
      return (
        <SidebarCollapseContainer
          key={index}
          handleSidebarItems={handleSidebarItems}
          data={data}
        />
      );
    }
    return <SidebarItem key={index} data={data} index={index} />;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items">
          {mdData?.map((e, index) => {
            return handleSidebarItems(e, index);
          })}
        </div>
      </div>
    </aside>
  );
}
