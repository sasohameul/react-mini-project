import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import ToDoList from "./components/ToDoList";
import GlobalStyle from "./styles/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NewPage" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
