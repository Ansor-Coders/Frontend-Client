// Sidebar.js
import React from "react";
import "./Sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const sidebarItems = [
    "Bosh sahifa",
    "O'qituvchilar",
    "O'quvchilar",
    "Guruhlar",
    "Sinovdagilar",
    "Sozlamalar",
  ];

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
