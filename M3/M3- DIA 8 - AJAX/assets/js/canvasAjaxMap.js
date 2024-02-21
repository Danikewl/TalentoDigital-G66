$.ajax({
  type: "GET",
  url: "https://mindicador.cl/api/dolar",
  dataType: "json",
  success: function (data) {
    let datosHistoricos = data.serie;
    $("#chartContainer").CanvasJSChart({
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
          dataPoints: datosHistoricos.map((dato) => {
            return { label: dato.fecha, y: dato.valor };
          }), //array de opciones a renderizar => [ {label:10/01/24, y: 895}]
        },
      ],
    }); //Renderizo el gráfico con las opciones y el map dentro de ellas
  }, //=> Si la petición se cumple correctamente yo renderizo un gráfico
  error: function (error) {
    console.log(error); //=> Si hay error
    alert(
      "Los recursos no se han cargado correctamente. No hay gráfico para mostrar"
    );
  },
});
