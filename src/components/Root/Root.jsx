import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header/Header";

const Root = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header title="Your App Title" toggleSidebar={toggleSidebar} />
      <Sidebar isTeacher={true} isSidebarOpen={isSidebarOpen} />{" "}
      {/* Pass isSidebarOpen here */}
    </>
  );
};

export default Root;
