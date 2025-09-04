import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeUpdate from "./components/EmployeeUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create" element={<EmployeeCreate />} />
        <Route path="/update/:id" element={<EmployeeUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
