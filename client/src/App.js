import React from 'react';
import SelectState from './SelectState';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Instructions from "./Instructions";
import Apply from "./ApplicationForm";
import Payment from "./Payment";


const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectState />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    );
};

export default App;
