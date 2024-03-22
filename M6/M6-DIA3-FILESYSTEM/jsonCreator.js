const fs = require("fs");

const limite = 1000;
const users = [];

for (let i = 0; i <= limite; i++) {
  let user = {
    id: i,
    nombre: "Nombre" + i,
    imagen:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  users.push(user);
}

let arrayUserJson = JSON.stringify(users);

fs.writeFile("users.json", arrayUserJson, "utf-8", (err) => {
  console.log("Hay error?", err);
});
