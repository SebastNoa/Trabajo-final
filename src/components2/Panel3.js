import React from 'react';
import '../Jeremy.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

function Panel3() {
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
                <div className="side-menu-item">Horarios</div>
                
            </div>

            <div className="panel">

                <div className="titulo-panel">
                <p>Reservar Cita</p>
                </div>
                <hr className="divider"/>
                <div class="texto3">Busqueda</div>
    <div class="texto4"> ingrese el nombre del docente,universidad o curso</div>
    
    <label for="inputNombre"></label>
    <input  class="buscador" type="text" id="inputNombre" placeholder="Buscar por nombre">
        </input>
   
    
    <button class="btn" >Buscar</button>

                <div> 
                </div>

            </div>

        </div>
        
    </div>
  );
}

export default Panel3;