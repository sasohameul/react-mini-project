import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import ToDoList from "./ToDoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NewPage" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
