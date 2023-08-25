import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector } from "react-redux";

const Home = () => {
      const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>

    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>

      <Header title="Your App Title" />
      <Sidebar />
    </div>
    </>
  );
}

export default Home