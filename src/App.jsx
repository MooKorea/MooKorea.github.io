import React, { useState } from "react";
import Documentation from "./assets/pages/documentation";
import Navbar from "./assets/components/Navbar";
import "./assets/styles/index.scss";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={"/documentation/:documentationId"}
          element={<Documentation />}
        />
      </Routes>
    </>
  );
}
