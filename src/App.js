import React from "react";
import PageLayout from "./components/layout";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <PageLayout />
    </div>
  );
}

export default App;
