/* Bucle for tradicional */
for (let i = 0; i < 3; i++) {
  console.log(i);
  let log = "";
  for (let i = 0; i < 3; i++) {
    log = i;
    console.log(log);
  }
}

/* Bucle for...of */
for (let i of [1, 2, 3, 4, 5]) {
  console.log(i);
}
