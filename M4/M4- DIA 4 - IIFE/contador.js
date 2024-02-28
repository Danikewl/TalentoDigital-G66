const moduloPrueba = (() => {
  let contador = 0;

  return {
    incrementaContador: () => {
      return contador++;
    },
    reseteoContador: () => {
      console.log("El valor del contador es: ", contador);
      contador = 0;
      return console.log("Contador reseteado: ", contador);
    },
  };
})();

moduloPrueba.incrementaContador(); //1
moduloPrueba.incrementaContador(); //2
moduloPrueba.incrementaContador(); //3
moduloPrueba.incrementaContador(); //4
moduloPrueba.reseteoContador(); //


const moduloDesafio = (()=>{
  let variable = "Algo"
  const funcionPrivada = (id,url)=> console.log("Tendrá la logica que necesiten con los parametros correspondientes");
  const funcionPrivada2 = (id,url)=> console.log("Tendrá la logica que necesiten con los parametros correspondientes");

    return{
      funcionPublica:(id,url)=>{
        funcionPrivada(id,url)
      }
    }
})()



moduloDesafio.funcionPublica("asdj234", "https://...")

