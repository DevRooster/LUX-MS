import "./App.css"; // Importamos el archivo CSS
import { Dash } from "./Dash";
import { LoginWeb } from "./LoginWeb"; //Importamos el componente LoginWeb
import { RegisterWeb } from "./RegisterWeb";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export function App() {
  
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginWeb/>} />
          <Route path="/register" element={<RegisterWeb/>} />
          <Route path="/login" element={<LoginWeb/>} />
          <Route path="/" element={<LoginWeb/>} />
          <Route path="/dashboard" element={<Dash/>} />
        </Routes>
      </BrowserRouter>

  );
}