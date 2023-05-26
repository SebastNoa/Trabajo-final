import React from 'react';
import '../App.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

function Panel3() {
  return (
    <div>
      <div className="top-menu">
        <div className="menu-icon">
          <img className="menu" src={icon2} alt="menu" />
        </div>
        <p className="titulo">Atención de Citas</p>
        <div className="user-icon">
          <img className="user" src={icon1} alt="user" />
        </div>
      </div>

      <div className="contenido">
        <div className="side-menu">
          <br></br>
          <div className="side-menu-item">Principal</div>
          <div className="side-menu-item">Perfil</div>
          <div className="side-menu-item">Horarios</div>
          <div className="side-menu-item">Calificaciones</div>
        </div>

        <div className="panel">
          <div className="titulo-panel">
            <p>Calificaciones</p>
          </div>
          <hr className="divider" />

          <div className="box">
            <div className="circulo">
              <p className="AS">1</p>
              <p className="nombre">Mario Lopez - 24 de abril de 2024 - 5 estrellas</p>
              <p className="texto">El profesor fue muy claro y supo darme buenos consejos. ¡Muchas gracias!</p>
            </div>
            <div className="circulo">
              <p className="JL">2</p>
              <p className="nombre">Sandra Sanchez - 23 de abril de 2024 - 4.5 estrellas</p>
              <p className="texto">Por lo general estuvo bien, pero algunas cosas no entendí.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel3;