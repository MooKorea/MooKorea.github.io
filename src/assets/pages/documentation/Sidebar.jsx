import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarCollapseContainer from "./SidebarCollapseContainer";

export default function Sidebar({ mdData }) {
  const handleSidebarItems = (data, index) => {
    const value = Object.values(data)[0];
    const key = Object.keys(data)[0];
    if (Array.isArray(value)) {
      return (
        <SidebarCollapseContainer
          handleSidebarItems={handleSidebarItems}
          key={key}
          value={value}
          data={data}
          index={index}
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
