import React, { useState } from 'react';
import './AppEstudiante.css';

function WelcomeBox() {
  return (
    <div className="box welcome-box">
      <div className="box-content">
        <p className="letras-de-bienvenida">Proximas citas</p>
      </div>
      <CitasBox />
      <CitasBox />
    </div>
  );
}

function AdditionalBox() {
  return (
    <div className="box">
      <div className="box-content">
        <p className="letras-adicionales"></p>
      </div>
    </div>
  );
}

function CitasBox() {
  const initials = "AC"; // Iniciales de la primera palabra
  const circleStyle = {
    backgroundColor: "Purple", // Color de fondo más claro
    border: "2px solid black", // Bordes negros
    borderRadius: "50%", // Forma circular
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    marginTop: "20px",
  };

  const initialsStyle = {
    margin: 0,
    fontSize: "12px", // Tamaño de fuente más pequeño
  };

  const smallBoxStyle = {
    backgroundColor: "gray", // Color plomo
    width: "100px",
    height: "80px",
    borderRadius: "3px",
    marginLeft: "387px", // Moverlo a la derecha
    marginTop: "-73px",
    borderRadius: "8%",
    cursor: "default", // Cursor predeterminado
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSmallBoxClick = () => {
    window.open("https://zoom.us/create/meeting", "_blank");
  };

  return (
    <div
      className="box citas-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box-content">
        <div style={circleStyle}>
          <p style={initialsStyle}>{initials}</p>
        </div>
        <div className="Letras-citas">
          <p className="letras-adicionales-citas">Alfonso Carrión</p>
        </div>
        <div className="fecha-cita">
          <p className="fecha-cita-letras">18/06/2023 08:00 am</p>
        </div>
        <div
          style={{ ...smallBoxStyle, cursor: isHovered ? "pointer" : "default" }}
          onClick={handleSmallBoxClick}
        ></div> {/* Pequeño cuadro de color plomo */}
      </div>
    </div>
  );
}

function AppEstudiante() {
  const [showOptions, setShowOptions] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions((prevState) => !prevState);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const closeProfileOptions = () => {
    setShowProfileOptions(false);
  };

  return (
    <div>
      <div className="PalabrasBienvenida">Bienvenido Querido Alumno</div>
      {showOptions && (
        <div className="dropdown">
          <p className="opcion">Principal</p>
          <p className="opcion">Perfil</p>
          <p className="opcion" onClick={() => window.open("https://example.com/horarios", "_blank")}>Citas</p>
        </div>
      )}
      {showOptions && <div className="overlay" onClick={closeOptions} />}
      <div className="box-container">
        <WelcomeBox />
        <AdditionalBox />
      </div>
    </div>
  );
}

export default AppEstudiante;






