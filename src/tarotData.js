const tarotInutil = [
  {
    nombre: "El Pingüino Emocional",
    descripcion: "Frío por fuera, dramático por dentro. Como un cubito llorando.",
    icono: "🐧"
  },
  {
    nombre: "La Gelatina Sin Control",
    descripcion: "Temblarás, pero no sabrás si es por miedo o por alegría tropical.",
    icono: "🍮"
  },
  {
    nombre: "El WiFi Espiritual",
    descripcion: "Te conectas con el universo... pero solo si la señal es buena.",
    icono: "📶"
  },
  {
    nombre: "La Sombra del Pan",
    descripcion: "Siempre estás, pero nadie te aprecia hasta que desapareces.",
    icono: "🍞"
  },
  {
    nombre: "El Aguacate Místico",
    descripcion: "Maduras cuando no te miran. Eres una contradicción cremosa.",
    icono: "🥑"
  },
  {
    nombre: "La Chancla Voladora",
    descripcion: "Te persigue desde el pasado. Siempre da en el blanco.",
    icono: "🩴"
  },
  {
    nombre: "El Gato Iluminado",
    descripcion: "Maúlla verdades que nadie pidió. Observa tu alma mientras duermes.",
    icono: "🐱"
  },
  {
    nombre: "El Ventilador Existencial",
    descripcion: "Da vueltas sin saber por qué. Como tú los lunes.",
    icono: "🌀"
  },
  {
    nombre: "La Papa Reveladora",
    descripcion: "En su simpleza, esconde la sabiduría milenaria del sofá.",
    icono: "🥔"
  },
  {
    nombre: "El Control Remoto Perdido",
    descripcion: "Solo aparece cuando no lo necesitas. Ama jugar a las escondidas.",
    icono: "📺"
  }
];

export function generarCartaDelDia() {
  const hoy = new Date();
  const codigo = parseInt(`${hoy.getFullYear()}${hoy.getMonth() + 1}${hoy.getDate()}`);
  const indice = codigo % tarotInutil.length;
  const carta = tarotInutil[indice];

  // Agregamos la fecha y hora como parte del retorno
  return {
    ...carta,
    fecha: hoy.toLocaleDateString(),
    hora: hoy.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
}