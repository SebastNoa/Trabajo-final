import React from 'react';
import '../Jeremy.css';
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
                <p>Citas</p>
                </div>

                <hr className="divider"/>
            </div>
            
        </div>
        <div class="container">
        <div className="circulo"><p className="JL">JL</p></div>
        <div class="nombre"> Profesor Juan perez<br/> Magister en Ingenieria de Software</div>
        <img  class ="foto" src="ab.jpeg"></img>
        <p class="parrafo">
            El profesor es un individuo dedicado y apasionado por la educación. 
            Con una vasta experiencia en su campo, posee un profundo conocimiento y una amplia comprensión de su materia. S
            u estilo de enseñanza es interactivo y estimulante, fomentando la participación activa de los estudiantes en el proceso de aprendizaje.
             Es paciente y comprensivo, brindando apoyo adicional a aquellos que luchan por comprender los conceptos. Además, es capaz de simplificar temas complejos 
             y presentarlos de manera clara y concisa. Su enfoque es integral, promoviendo el desarrollo no solo de habilidades académicas, sino también de habilidades so
             ciales y emocionales. Su entusiasmo contagioso y su habilidad para motivar a los estudiantes los inspira a alcanzar su máximo potencial. En resumen, el profe
             sor es un mentor excepcional que deja una huella duradera en la vida de sus alumnos"
        </p>
        <div class="correo">Correo electronico <br/> <a href="jlopez1949@ulima.edu.pe">jlopez1949@ulima.edu.pe</a></div>
       <div class="cursos">Cursos:</div>
        <div class="a">Ingenieria de Software</div>
        <div class="b">Programacion web</div>
        <div class="c">programacion de videojuegos</div>
        <div class="d">Programacion orientada a objetos</div>
        <h2 class="fechas">Fechas y horarios disponibles</h2>
    <hr class="dividor"/>

    <label class="label" for="cursos">Selecciona un curso:</label>
  <select class="escoger" id="cursos">
    <option value="curso1">Ingenieria de Software</option>
    <option value="curso2">Programacion web</option>
    <option value="curso3">programacion de videojuegos</option>
    <option value="curso3">Programacion orientada a objetos</option>
  </select>

        
        <label  class="label2"for="fecha">Selecciona una fecha:</label>
        <input  class="es"type="date" id="fecha"></input>
        <h2 class="horariosd">Horarios disponibles:</h2>
        <ul  class="idh" id="horarios"></ul>
        <div class="sesiones">Las sesiones son de 30 minutos</div>
        <br/>
        <button class="btn" id="reservarBtn" disabled>Reservar cita</button>
       
        
    </div>


    </div>
  );
}

export default Panel2;