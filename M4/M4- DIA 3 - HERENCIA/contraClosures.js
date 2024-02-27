




function local() {
  let a = 2;
  console.log(a);

  function interna() {
    console.log(a);
  }

  interna();
}

local();
console.log(a);
