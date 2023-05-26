import React from 'react';
import '../Paginas/CitasPaneles';

function Panel1() {
    return <div class="Sistema">
      <form action="" class="form">
        <title>INICIO</title>
        <h1 class = "titulo">SISTEMA DE CITAS PARA ATENCIÓN A ESTUDIANTES</h1>
                    
        <div class="Contenedor">
          <input type="email" class="texto"></input>
          <label for="" class="label">Usuario o Correo</label>
        </div>
                    
        <div class="Contenedor">
          <input type="password" class="texto"></input>
          <label for="" class="label">Password</label>
          
        </div>
        <div class = "debajo">
        <a href="">Registro de nuevo usuario</a> -
        - <a href="recuperar-contrasena.html">Olvide mi contraseña</a>
        </div>
        <div class = "botones">
          <button class="boton">Salida</button>
          <button class="boton">Ingreso</button>
        </div>
          
      </form>

    </div>
  }

  export default Panel1;