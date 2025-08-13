// src/components/Card.jsx
import React from 'react';

export default function Card({ carta }) {
  if (!carta) return null;
  return (
    <div
      className="carta animar"
      style={{ backgroundColor: carta.color }}
      role="article"
      aria-label={`Carta del día: ${carta.nombre}`}
    >
      <div className="icono">{carta.icono}</div>
      <h2>{carta.nombre}</h2>
      <p>{carta.descripcion}</p>
      <div className="fecha">
        <p>🗓 {carta.fecha} — ⏰ {carta.hora}</p>
      </div>
    </div>
  );
}
