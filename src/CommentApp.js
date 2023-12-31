import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/CommentLogin";
import Main from "./pages/CommentMain";

const App = () => {
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/main" element={<Main/>}/>
          </Routes>
      </BrowserRouter>
    
  );
}

export default App;
