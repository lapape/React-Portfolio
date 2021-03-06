import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/pages/Project";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import "./components/assets/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
