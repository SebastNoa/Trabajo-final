import React, { useState } from 'react';
import "./CrearCita.css";


export const CrearCita = () => {
  const [dia, setDia] = useState('');
  const [horInicio, setHorInicio] = useState('');
  const [horFin, setHorFin] = useState('');
  const [url, setUrl] = useState('');
  const [citasGuardadas, setCitasGuardadas] = useState([]);

  const handleDiaChange = (e) => {
    setDia(e.target.value);
  };

  const handleHorInicioChange = (e) => {
    setHorInicio(e.target.value);
  };

  const handleHorFinChange = (e) => {
    setHorFin(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dia.trim() === '') {
      alert('Ingrese un dia');
      return;
    }

    if (horInicio.trim() === '') {
      alert('Ingrese una hora de inicio');
      return;
    }

    if (horFin.trim() === '') {
      alert('Ingrese una hora de fin');
      return;
    }

    if (url.trim() === '') {
      alert('Ingrese una url');
      return;
    }

    const nuevaCita ={
      dia: dia,
      horInicio: horInicio,
      horFin: horFin,
      url: url,
    };

    setCitasGuardadas([...citasGuardadas, nuevaCita]);
    setDia('');
    setHorInicio('');
    setHorFin('');
    setUrl('');
  };

  return (
    <div>
      <h1 className='mititulo'>Mis horarios</h1>
      <hr />
      <p className='texto'>Agregue sus horarios de disponibilidad durante la semana</p>
      <form onSubmit={handleSubmit}>
        <input type="date" value={dia} className="input1" onChange={handleDiaChange} />
        <input type="time" value={horInicio} className="input2" onChange={handleHorInicioChange} />
        <input type="time" value={horFin} className="input3" onChange={handleHorFinChange} />
        <input type="text" value={url} className="input4" onChange={handleUrlChange} />
        <button type="submit" className='agregar'>Agregar</button>
      </form>
      <ul>
        {citasGuardadas.map((nuevaCita, index) => (
          <li className='linea' key={index}>
            {nuevaCita.dia} de {nuevaCita.horInicio} a {nuevaCita.horFin} en el enlace {nuevaCita.url}
          </li>
        ))}
      </ul>
    </div>
  );
}