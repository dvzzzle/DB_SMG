import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import Etaps from "./page/Etaps";
import Listing from "./page/Listing";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etaps" element={<Etaps />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
