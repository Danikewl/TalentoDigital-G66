let auto = {
  marca: "Mazda",
  competencia: "Ferrari",
  modelo: 2023 /* Si el valor es un dato, es una propiedad */,
  arrancar: function () {
    return alert("brmmm brmmm");
  } /* Si el valor es una función es un método */,
};

/* puedo acceder a propiedades de un objeto y cambiarle su valor */
auto.marca = "Lotus";
/* OJO! ejemplo para ver como reasignar un nuevo valor con distinto dato(de string a array) => "MALA PRÁCTICA 💀☠💀" */
auto.competencia = [auto.competencia, "Lamborghini"];

/*puedo asignarle nuevas propiedades a un objeto */
auto.patente = "ABC-123";

console.dir(document);
