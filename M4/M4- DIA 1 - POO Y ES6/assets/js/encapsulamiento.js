/* EJEMPLO DE COMO SETEAR UNA PROPIEDAD SIN ENCAPSULAMIENTO */
function Estudiante(nombre) {
  this.nombre = nombre;
}

let estudiante1 = new Estudiante("Juan");
estudiante1.nombre = "Lucas";

console.log(estudiante1);

/* GETTERS Y SETTERS => MÉTODOS PARA EL ENCAPSULAMIENTO */

function Vehiculos(marca) {
  let _marca = marca;
  Object.defineProperty(this, "_getMarca", {
    get: function () {
      return _marca;
    },
  });
  Object.defineProperty(this, "_setMarca", {
    set: function (marca) {
      _marca = marca;
    },
  });
}

Vehiculos.prototype.getMarca = function () {
  return this._getMarca;
};

Vehiculos.prototype.setMarca = function (marca) {
  this._setMarca = marca;
};

let v1 = new Vehiculos("Ford"); // Creando un nuevo vehiculo
console.log(v1.getMarca()); // "Ford"
//Pseudocódigo de como quedaría el objeto v1 antes del setMarca
// {
//    _marca: Ford,
//    _getMarca :fn(){return _marca},
//    _setMarca :fn(marca){ _marca = marca;}
//     getMarca :fn(){return this._getMarca}
//     setMarca: fn(marca){ this._setMarca = marca}
//  }

v1.setMarca("Kia");
console.log(v1.getMarca()); // "Kia"
//Pseudocódigo de como quedaría el objeto v1 después del setMarca
// {
//    _marca: Kia,
//    _getMarca :fn(){return _marca},
//    _setMarca :fn(marca){ _marca = marca;}
//     getMarca :fn(){return this._getMarca}
//     setMarca: fn(marca){ this._setMarca = marca}
//  }


