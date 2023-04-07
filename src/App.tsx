import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AddPage from "./pages/addPage/AddPage";
import RegistPage from "./pages/registrPage/RegistPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Navbar from "./antDesign/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addDriver" element={<AddPage />} />
        <Route path="/registr" element={<RegistPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
