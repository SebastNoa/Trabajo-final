import React from 'react';
import '../App.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

function Panel2() {
  return (
    <div>

        <div className="top-menu">
            <div className="menu-icon">
                <img class="menu" src={icon2} alt="menu"/>
            </div>
            <p className="titulo">Atención de Citas</p>
            <div className="user-icon">
                <img class="user" src={icon1} alt="user"/>
            </div>
        </div>

        <div className="contenido">
            <div className="side-menu">
                <br></br>
                <div className="side-menu-item">Principal</div>
                <div className="side-menu-item">Perfil</div>
                <div className="side-menu-item">Citas</div>
            </div>

            <div className="panel">

                <div className="titulo-panel">
                <p>Reserva de Cita</p>
                </div>

                <hr className="divider"/>
            </div>

        </div>

    </div>
  );
}

export default Panel2;