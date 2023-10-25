import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import About from "../pages/About";
import WhatWe from "../pages/WhatWe";
import Touch from "../pages/Touch";
import Project from "../pages/Project.jsx";
import Header from "../component/Header";

import Footer from "./Footer";
import "../style/home.css";
import "../style/service.css";
import "../style/brand1.css";
import "../style/about.css";
import "../style/whatWe.css";
import "../style/touch.css";
import "../style/playvideo.css";
import "../style/achievement.css";
import "../style/project.css";
import "../style/navbar.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<WhatWe />} />
          <Route path="/touch" element={<Touch />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
