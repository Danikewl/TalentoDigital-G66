const yargs = require("yargs");
const ventas = require("./ventas.json");

yargs
  .command(
    //1- Nombre del comando
    "saludo",
    //2- Descripción del cmando
    "Comando para saludar",
    //3- Objeto constructor
    {
      // La propiedad del objeto será el argumento esperado
      nombre: {
        // Descripción del argumento
        describe: "Argumento para definir tu nombre",
        // Es obligatorio?
        demand: true,
        // Paso 9
        alias: "n",
      },
    },
    //4- Callback de ejecución
    (args) => {
      //Aquí va la lógica que quiero que se ejecute
      console.log(
        `¡Saludos cordiales ${args.nombre}, espero que tengas un excelente día!`
      );
    }
  )
  .command(
    //1- Nombre del comando
    "reporteVentas",
    //2- Descripción del cmando
    "Comando para reporte de ventas",
    //3- Objeto constructor
    {
      // La propiedad del objeto será el argumento esperado
      nombre: {
        // Descripción del argumento
        describe: "Argumento para definir tu nombre",
        // Es obligatorio?
        demand: true,
        // Paso 9
        alias: "n",
      },
    },
    //4- Callback de ejecución
    (args) => {
      const initialValue = 0;
      //Aquí va la lógica que quiero que se ejecute
      let total = ventas.reduce(
        (acumm, venta) => acumm + venta.precio,
        initialValue
      );

      console.log(`El total de ventas generado es de ${total}`);
    }
  )
  .version()
  .help().argv;
