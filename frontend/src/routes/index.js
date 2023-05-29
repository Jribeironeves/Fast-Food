import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";
import Concluded from "../pages/Concluded";

const Routa = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cozinha" element={<Kitchen />} />
        <Route path="/retirada" element={<Concluded />} />
      </Routes>
    </>
  );
};

export default Routa;
