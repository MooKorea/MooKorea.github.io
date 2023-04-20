import React, { useRef } from "react";

export default function Sidebar({ sidebarItems, handlePageChange }) {
  const allItems = useRef();
  const handleActiveItem = (e) => {
    Array.from(allItems.current.children).forEach((e) => {
      e.classList.remove("item-active");
    });
    e.target.classList.add("item-active");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items" ref={allItems}>
          {sidebarItems?.map((e, index) => {
            const text = e
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
            return (
              <div
                className="item"
                key={index}
                onClick={(e) => {
                  handlePageChange(index);
                  handleActiveItem(e);
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
