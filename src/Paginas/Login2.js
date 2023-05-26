import './Login2.css';

const Footer = () => { 
  return 
  <footer className = "card mt-4"> 
    <div className = "card-body"> 
      Universidad de Lima 2022-0 
    </div> 
  </footer> 
} 

export default function Login2() {
  return <div class="Sistema">
    <form action="" class="Estructura">
      <title>REGISTRO</title>
      <h1 class="Titulo">SISTEMA DE CITAS PARA ATENCIÓN A ESTUDIANTES </h1>
      <h2 class="Titulo">Página de registro</h2>            
      
      <div class="Contenedor">
        <input type="email" class="texto"></input>
        <label for="" class="label">Correo electrónico</label>
      </div>
                  
      <div class="Contenedor">
        <input type="password" class="texto"></input>
        <label for="" class="label">Password</label>
      </div>
      <div class="Contenedor">
        <input type="password" class="texto"></input>
        <label for="" class="label">Ingrese Password de nuevo</label>
      </div>

      <p>Datos Personales</p>
      <div class="Contenedor">
        <input type="text" class="texto"></input>
        <label for="" class="label">Nombres</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto"></input>
        <label for="" class="label">Apellidos</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto"></input>
        <label for="" class="label">Tipo Documento</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto"></input>
        <label for="" class="label">N° Documento</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto"></input>
        <label for="" class="label">Rol</label>
      </div>
      <div class = "boton">
        <button class="botonR">Registrar</button>
      </div>
        
    </form>

    <Footer/>
  </div>
}
