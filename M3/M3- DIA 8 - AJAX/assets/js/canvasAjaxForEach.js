let arrayDataPoints = [];

const opciones = {
  animationEnabled: true, //habilitar animaciones del gráfico
  theme: "light2", // tema del gráfico => dark?
  title: {
    text: "Daily Sales Data",
  },
  axisX: {
    reversed: false,
    valueFormatString: "DD MMM YYYY",
  },
  axisY: {
    title: "USD",
    titleFontSize: 24,
  },
  data: [
    {
      type: "spline", //Tipo de gráfico que quiero
      dataPoints: arrayDataPoints, //array de opciones a renderizar => [ {label:10/01/24, y: 895}]
    },
  ],
};
$.ajax({
  type: "GET",
  url: "https://mindicador.cl/api/dolar",
  dataType: "json",

  success: function (data) {
    let datosHistoricos = data.serie;

    datosHistoricos.forEach((dato) =>
      arrayDataPoints.push({
        label: dato.fecha.split("T")[0].split("-").reverse().join("/"),
        y: dato.valor,
      })
    ); // pushear al arrayDataPoints, el objeto formateado tal cual me lo pide ChartJS

    $("#chartContainer").CanvasJSChart(opciones); //Renderizo el gráfico
  }, //=> Si la petición se cumple correctamente yo renderizo un gráfico

  error: function (error) {
    console.log(error); //=> Si hay error
    // $("body").html("Hay un error!!!");
    alert(
      "Los recursos no se han cargado correctamente. No hay gráfico para mostrar"
    );
  },
});
