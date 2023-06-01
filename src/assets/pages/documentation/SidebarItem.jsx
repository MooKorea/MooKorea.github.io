import React, { useContext } from "react";
import { decode } from "html-entities";
import { PageChange } from ".";
import { Link } from "react-router-dom";

export default function SidebarItem({ keys, values }) {
  const [page, setPage] = useContext(PageChange);
  return (
    <Link
      className={`item` + (values.slice(0, -3) === page ? " item-active" : "")}
      to={`/documentation/${values?.slice(0, -3).replaceAll("/", "--")}`}
    >
      <div className="bullet">{decode("&#8226;")}</div>
      <div>{keys}</div>
    </Link>
  );
}
