import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.js";
import Header from "./components/Header/index.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}
