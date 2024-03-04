/* -------------FORMULADO CON TRY/CATCH--------------------------------------- */
/* const showError = () => {
  try {
    throw "Ha ocurrido un error";
  } catch (e) {
    console.log(e);
  }
};
showError(); */

/* -------------FORMULADO CON PROMESA=> .THEN/.CATCH--------------------------------------- */

function showError2() {
  return new Promise((resolve, reject) => {
    reject(new Error("Ha ocurrido un error!"));
  });
}

showError2()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err.message);
  });
