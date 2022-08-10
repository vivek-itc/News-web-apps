import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import Route from "./Router";
import Header from "./components/Headers/index"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route />
    </BrowserRouter>
  )
}
export default App;