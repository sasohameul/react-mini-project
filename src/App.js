import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {

  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
  html,
  #root {

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  body {

    width: 100%;
    height: 100vh;

  }

`;

const App = () => {

return (

  <BrowserRouter>
  <GlobalStyle />
    <Routes>
       <Route path="/" element={<Login/>}></Route> 
        <Route path="/main" element={<Main/>}></Route>
    </Routes>
  </BrowserRouter>

);

}

export default App;