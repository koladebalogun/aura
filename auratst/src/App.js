import "./App.css";
import Card from "./components/Card/Card";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Card />
        <Auth />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
