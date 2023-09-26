
import "./style.css";
import Navbar from "./components/navbar"; 
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <Routes>
      <Navbar/>
    </Routes> 
    </div>
  );
}

