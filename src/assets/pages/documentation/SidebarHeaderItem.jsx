import React, { useState } from "react";

export default function SidebarHeaderItem({ text, index }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleMenuSelect = () => {
    const select = document.querySelector(`[data-collapsible="${index}"]`);
    if (select.classList.contains("collapsed")) {
      select.classList.remove("collapsed");
    } else {
      select.classList.add("collapsed");
    }
    setIsCollapsed(!isCollapsed)
  };

  return (
    <div data-collapse-menu={index} className="item-header" onClick={handleMenuSelect}>
      <svg
        id="a"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        style={isCollapsed ? {transform:'rotate(90deg)'} : null} 
      >
        <path
          d="m19.53,53.08l23.7-20.07c.64-.54.64-1.48,0-2.02L19.53,10.92"
          fill="#fff"
          stroke="#000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="9"
        />
      </svg>
      <div>{text}</div>
    </div>
  );
}
