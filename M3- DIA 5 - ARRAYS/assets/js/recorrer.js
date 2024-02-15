//usuarios.length = 6
const usuarios = ["Manuel", "Alan", "Pedro", "Sebastian", "Alfonso", "Lucas"];
//index =            0         1        2       3               4       5
//                                                                      ↑
// i = 0

//              5 <      6
for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];//El elemento que estoy itreando
  let saludo = `Hola ${usuario}, bienvenido!` 
  console.log(saludo)
}
