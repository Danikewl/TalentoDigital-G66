function combinarObjetos(a, b) {
  return { ...a, ...b };
}

let a = { unaLlave: "un valor" };

let b = { otraLlave: "otro valor" };

let combo = combinarObjetos(a, b);
console.log(combo);
