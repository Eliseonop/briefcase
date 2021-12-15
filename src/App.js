import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderView from "./views/HeaderView";
import HomeView from "./views/HomeView";
import ProyectosView from "./views/ProyectosView"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div >
      <Router>
      <HeaderView />
      <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/Proyectos" element={<ProyectosView />} />

      </Routes>
      </Router>
    </div>

  );
}
