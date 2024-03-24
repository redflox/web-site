export function formatearFecha(fecha: string) {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const d = new Date(fecha);
  const dia = d.getDate();
  const mes = meses[d.getMonth()];
  const año = d.getFullYear();

  return `${dia} de ${mes} de ${año}`;
}
