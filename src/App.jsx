import React, { useEffect, useState } from 'react';
import { generarCartaDelDia } from './lib/tarot';
import './App.css';
import { getOrCreateUserId } from './utils/uid';
import Card from './components/Card';

function App() {
  const [carta, setCarta] = useState(null);
  const [diaActual, setDiaActual] = useState(new Date().getDate());

  useEffect(() => {
  const userId = getOrCreateUserId();

  const cargarCarta = () => {
    const cartaHoy = generarCartaDelDia({ userId });
    setCarta(cartaHoy);
    setDiaActual(new Date().getDate());
  };

  cargarCarta();

  // Revisa una vez por minuto si cambió el día
  const interval = setInterval(() => {
    const now = new Date();
    const newDay = now.getDate();
    if (newDay !== diaActual) {
      const cartaNueva = generarCartaDelDia({ fecha: now, userId });
      setCarta(cartaNueva);
      setDiaActual(newDay);
    }
  }, 60 * 1000);

  return () => clearInterval(interval);
}, [diaActual]);


  return (
    <div className="app-container">
      <h1>🃏 Tarot Inútil del Día</h1>
      {carta && (<Card carta={carta} />)}
    </div>
  );
}

export default App;
