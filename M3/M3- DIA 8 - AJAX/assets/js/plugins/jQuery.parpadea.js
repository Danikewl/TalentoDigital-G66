jQuery.fn.parpadea = function () {
  /* por cada elemento del array seleccionado... */

  this.each(function () {
    //this=> [{},{},{}] => guarda el elemento en una variable

    elem = $(this); //this => {unDiv} => el objeto iterado en este momento

    //transición con el elemento
    elem.fadeOut(250, function () {
      $(this).fadeIn(250); //=> this => elem
    });
  });

  return this;
};

/*
 jQuery = {
            nombre: "Juan Query"

            fn:{
                    metodo1: function...
                    metodo2: function...
                   parpadea: function---
                }
        } 
*/

/* 
perro = {
                nombre: "firulais"
               apellido: "stone"
                fn: {
                        saludar: function hola soy this.nombre...
                        levantarLaPata: function...
                        correr: function...
                        jugar: function ...
                    }   
            } 
*/

/* perro.apellido = "stone";
perro.fn.jugar = function () {}; */
