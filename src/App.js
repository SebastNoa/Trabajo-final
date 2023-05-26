import { Routes, Route } from "react-router-dom";
import { Home } from './Paginas/Home';
import { CrearCita } from './Paginas/CrearCita';
import Navbar from "./Paginas/Navbar";
import { MiApp } from "./Paginas/Login1";
import AppProfes from "./Paginas/Profes";
import AppEstudiante from "./Paginas/AppEstudiante";
import SearchScreen from "./Paginas/ReservarCita";
import Login2 from "./Paginas/Login2";
import PerApp from "./Paginas/PerApp";
import CitasPaneles from "./Paginas/CitasPaneles";
import Jeremy from "./Jeremy";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
      <Route path="/Login1" element={<MiApp/>} />
      <Route path="/Login2" element={<Login2/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReservarCita" element={<SearchScreen />} />
        <Route path="/horarios" element={<CrearCita />} />
        <Route path="/AppProfes" element={<AppProfes/>} />
        <Route path="/AppEstudiante" element={<AppEstudiante/>} />
        <Route path="/perfil" element={<PerApp/>} />
        <Route path="/citasPaneles" element={<CitasPaneles/>} />
        <Route path="/citasyhorario" element={<Jeremy/>} />
      </Routes>
    </>
  );
}

export default App;
