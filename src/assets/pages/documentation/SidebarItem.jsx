import React from "react";
import { decode } from "html-entities";

export default function SidebarItem({
  data,
  setPage,
  index,
  page
}) {
  return (
    <div
      className={`item` + (index === page ? " item-active" : "")}
      key={index}
      onClick={() => {
        setPage(index);
      }}
    >
      <div className="bullet">{decode("&#8226;")}</div>
      <div>{Object.keys(data)[0]}</div>
    </div>
  );
}
