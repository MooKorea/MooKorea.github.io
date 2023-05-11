import React, { useState } from "react";
import SidebarHeaderItem from "./SidebarHeaderItem";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ sidebarItems, handlePageChange }) {
  const [activeItem, setActiveItem] = useState();
  const handleSidebarItems = (text, index) => {
    if (Array.isArray(text)) {
      return (
        <div className="nested-group collapsed" data-collapsible={index - 1} key={index}>
          <SidebarItem
            data={text}
            handlePageChange={handlePageChange}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      );
    }
    return <SidebarHeaderItem key={index} text={text} index={index} />;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items">
          {sidebarItems?.map((e, index) => {
            return handleSidebarItems(e, index);
          })}
        </div>
      </div>
    </aside>
  );
}
