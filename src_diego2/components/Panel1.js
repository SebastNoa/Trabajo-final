import React from 'react';
import '../App.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

function Panel1() {

  return (
    <div>

        <div className="top-menu">
            <div className="menu-icon">
                <img className="menu" src={icon2} alt="menu"/>
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
                    <p>Mis Citas</p>
                    <button className="btnProgramar">Programar una Cita</button>
                </div>

                <hr className="divider"/>

                <div>
                    <p>Citas de asesoría reservadas:</p>
                    <button className="btnVer">Ver citas futuras</button>
                </div>

                <div className="cuadros">

                    <div className="cuadro">
                        <div>
                            <div className="circulo"><p className="JL">JL</p></div>
                            <p className="nomProf">Juan López</p>
                            <p className="puestoProf">MG. Ingeniería de Software</p>
                        </div>

                        <button className="btnCalificar">Calificar</button>

                    </div>
                    <div className="cuadro">
                        <div>
                            <div className="circulo"><p className="AS">AS</p></div>
                            <p className="nomProf">Adriana Sánchez</p>
                            <p className="puestoProf">MG. Ingeniería de Sistemas</p>
                        </div>

                        <button className="btnCalificar">Calificar</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Panel1;
