import React from 'react';
import '../Jeremy.css';
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
                    <p>Citas  reservadas:</p>
                    <button className="btnVer">Ver citas futuras</button>
                </div>

                <div className="cuadros">

                    <div className="cuadro">
                        <div>
                            <div className="circulo"><p className="JL">JL</p></div>
                            <p className="nomProf">Juan López</p>
                            <p className="puestoProf">MG. Ingeniería de Software</p>
                            <img class="prof-photo" src="ab.png" alt="Foto del profesor"></img>
                            <p>Fecha de la cita: 21 de mayo de 2023</p>
                            <p>Hora: 10:00 AM</p>
                            <p>Curso: Nombre del curso</p>
                            <a class="zoom-link" href="enlace_a_zoom">Enlace a Zoom</a>
                            <button className="btnCalificar">Cancelar</button>
                        </div>

                        

                    </div>
                    <div className="cuadro">
                        <div>
                            <div className="circulo"><p className="AS">AS</p></div>
                            <p className="nomProf">Adriana Sánchez</p>
                            <p className="puestoProf">MG. Ingeniería de Sistemas</p>
                            <img class="prof-photo" src="ab.png" alt="Foto del profesor"></img>
                            <p>Fecha de la cita: 21 de mayo de 2023</p>
                            <p>Hora: 10:00 AM</p>
                            <p>Curso: Nombre del curso</p>
                            <a class="zoom-link" href="enlace_a_zoom">Enlace a Zoom</a>
                            <button className="btnCalificar">Cancelar</button>
                        </div>

                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Panel1;
