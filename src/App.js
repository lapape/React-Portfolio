import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Card from "./components/Project";
import Footer from "./components/Footer";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
