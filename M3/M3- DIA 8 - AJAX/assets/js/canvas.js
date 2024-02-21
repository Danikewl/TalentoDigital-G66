let array = [
  { nombre: "papaya", kg: 23 },
  { nombre: "naranja", kg: 15 },
  { nombre: "platano", kg: 25 },
  { nombre: "mango", kg: 30 },
  { nombre: "sandia", kg: 35 },
  { nombre: "guayaba", kg: 20 },
]; /*PETICIÓN AJAX FICTICIA */

let arrayDataPoints = array.map((elemento) => {
  return { label: elemento.nombre, y: elemento.kg };
});

const options = {
  title: {
    text: "Gráfico de columnas con jQuery CanvasJS",
  },
  axisX: {
    title: "Frutas Tropicales",
    titleFontSize: 12,
  },
  axisY: {
    title: "Consumo Kg/persona/año",
    titleFontSize: 12,
  },
  data: [
    {
      type: "column",
      dataPoints: arrayDataPoints,
    },
  ],
};

$("#chartContainer").CanvasJSChart(options); //Renderizo el gráfico
