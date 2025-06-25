import React, { useEffect, useState } from 'react';
import { generarCartaDelDia } from './tarotData';
import './App.css';

function App() {
  const [carta, setCarta] = useState(null);
  const [diaActual, setDiaActual] = useState(new Date().getDate());

  useEffect(() => {
    const cargarCarta = () => {
      const cartaHoy = generarCartaDelDia();
      setCarta(cartaHoy);
      setDiaActual(new Date().getDate());
    };

    cargarCarta();

    const interval = setInterval(() => {
      const nuevoDia = new Date().getDate();
      if (nuevoDia !== diaActual) {
        cargarCarta();
      }
    }, 60000); // revisa cada 1 minuto

    return () => clearInterval(interval);
  }, [diaActual]);

  return (
    <div className="app-container">
      <h1>🃏 Tarot Inútil del Día</h1>
      {carta && (
        <div
          className="carta animar"
          style={{ backgroundColor: carta.color }}
        >
          <div className="icono">{carta.icono}</div>
          <h2>{carta.nombre}</h2>
          <p>{carta.descripcion}</p>
          <div className="fecha">
            <p>🗓 {carta.fecha} — ⏰ {carta.hora}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
