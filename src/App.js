import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
