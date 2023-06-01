import React, { useContext } from "react";
import { decode } from "html-entities";
import { PageChange } from ".";
import { Link } from "react-router-dom";

export default function SidebarItem({ data, index }) {
  const [page, setPage] = useContext(PageChange);
  return (
    <Link
      className={`item` + (data === page ? " item-active" : "")}
      key={index}
      onClick={() => {
        setPage(data);
      }}
      to={`/documentation/${Object.values(data)[0]?.slice(0, -3).replaceAll("/", "--")}`}
    >
      <div className="bullet">{decode("&#8226;")}</div>
      <div>{Object.keys(data)[0]}</div>
    </Link>
  );
}
