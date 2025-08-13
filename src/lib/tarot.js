// src/lib/tarot.js
/**
 * @typedef {Object} Carta
 * @property {number} id
 * @property {string} nombre
 * @property {string} descripcion
 * @property {string} icono
 */

import tarotInutil from '../data/tarotData.json';
import { colores } from '../constants/colores';
import { hashStringToInt } from './hash';

/**
 * Genera la carta de forma determinística para un usuario y una fecha.
 * - Distinto usuario ⇒ distinta carta el mismo día.
 * - El mismo usuario ⇒ la misma carta durante ese día.
 * - Cambia automáticamente al día siguiente.
 *
 * @param {Object} opts
 * @param {Date}   [opts.fecha=new Date()]
 * @param {string} opts.userId - Identificador único del usuario (persistido en localStorage).
 * @param {'daily'|'random'} [opts.mode='daily'] - 'daily' fija por día, 'random' ignora fecha y userId.
 * @returns {Carta & {fecha: string, hora: string, color: string}}
 */
export function generarCartaDelDia({ fecha = new Date(), userId, mode = 'daily' } = {}) {
  let indice;
  if (mode === 'random') {
    indice = Math.floor(Math.random() * tarotInutil.length);
  } else {
    const y = fecha.getFullYear();
    const m = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const d = fecha.getDate().toString().padStart(2, '0');
    const key = `${userId ?? 'anon'}|${y}${m}${d}`;
    indice = hashStringToInt(key) % tarotInutil.length;
  }

  const carta = tarotInutil[indice];
  return {
    ...carta,
    fecha: fecha.toLocaleDateString(),
    hora: fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    color: colores[indice % colores.length]
  };
}

export { tarotInutil };
