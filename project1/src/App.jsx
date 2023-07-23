import React from "react";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortAnswer from "./ShortAnswer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
