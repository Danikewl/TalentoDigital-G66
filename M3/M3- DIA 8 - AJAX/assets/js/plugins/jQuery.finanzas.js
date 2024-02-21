/* buscar valor del UF */
jQuery.fn.datosUf = function () {
  let element = this; //=> #miCaja
  $.ajax({
    type: "GET",
    url: "https://mindicador.cl/api",
    dataType: "json",
    success: function (data) {
      element.append(`<span> $${data.uf.valor}</span>`);
    },
  });
  return this;
};

/* Buscar datos del Dolar */
jQuery.fn.datosDolar = function () {
  let element = this; //=> #miCaja
  $.ajax({
    type: "GET",
    url: "https://mindicador.cl/api",
    dataType: "json",
    success: function (data) {
      element.append(`<span> $${data.dolar.valor}</span>`);
    },
  });
  return this;
};
