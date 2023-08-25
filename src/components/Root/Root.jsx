// Root.js
import React from "react";

import Register from "../../Pages/Register/register";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Main/Home";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Root;
