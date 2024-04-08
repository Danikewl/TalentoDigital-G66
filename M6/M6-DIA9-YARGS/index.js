const yargs = require("yargs");

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
  .help().argv;
