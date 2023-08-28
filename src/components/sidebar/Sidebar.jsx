// Sidebar.js
import React from "react";
import "./Sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const adminSidebarItems = [
    "Bosh sahifa",
    "O'qituvchilar",
    "O'quvchilar",
    "Guruhlar",
    "Sinovdagilar",
    "Sozlamalar",
  ];

  const teacherSidebarItems = [
    "Bugun",
    "Darslarim",
    "Guruhlarim",
    "O'quvchilarim",
  ];

  const sidebarItems = isAdmin ? adminSidebarItems : teacherSidebarItems;

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
