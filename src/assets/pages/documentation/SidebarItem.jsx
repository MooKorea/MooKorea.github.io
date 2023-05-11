import React from "react";
import { decode } from "html-entities";

export default function SidebarItem({
  data,
  handlePageChange,
  activeItem,
  setActiveItem,
}) {
  const handleNestedItems = (text, index) => {
    const nest = text.startsWith("%%") ? "doubleNest" : "singleNest";
    const identifier = text.replaceAll(" ", "-") + index;
    return (
      <div
        className={nest + " item" + (activeItem === identifier ? " item-active" : "")}
        key={index}
        onClick={() => {
          handlePageChange(text);
          setActiveItem(identifier);
        }}
      >
        <div className="bullet">{decode("&#8226;")}</div>
        <div>{text.replaceAll("%", "")}</div>
      </div>
    );
  };

  return data.map((e, index) => {
    return handleNestedItems(e, index);
  });
}
