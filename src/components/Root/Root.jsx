// Root.js
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

const Root = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Header title="Your App Title" />
      <Sidebar />
      <div className="content">{/* Your main content goes here */}</div>
    </div>
  );
};

export default Root;
