import React, { useEffect, useState } from 'react';
import { generarCartaDelDia } from './tarotData';
import './App.css';

function App() {
  const [carta, setCarta] = useState(null);

  useEffect(() => {
    const cartaHoy = generarCartaDelDia();
    setCarta(cartaHoy);
  }, []);

  return (
    <div className="app-container">
      <h1>🃏 Tarot Inútil del Día</h1>
      {carta && (
        <div className="carta">
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
