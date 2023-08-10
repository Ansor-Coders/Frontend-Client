import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = ({ isSidebarOpen }) => {
  const [isTeacher, setIsTeacher] = useState(true);

  const teacherSidebarItems = [
    "Bosh sahifa",
    "O'qituvchilar",
    "O'quvchilar",
    "Guruhlar",
    "Sinovdagilar",
    "Sozlamalar",
  ];

  const studentSidebarItems = [
    "Bosh sahifa",
    "Bugun",
    "Darslarim",
    "Guruhlarim",
    "O'quvchilarim",
    "Sozlamalar",
  ];

  const sidebarItems = isTeacher ? teacherSidebarItems : studentSidebarItems;

 return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}> {/* Use isSidebarOpen here */}
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
