let peticionPosts = {
  url: "https://jsonplaceholder.typicode.com/posts",
  type: "GET",
  dataType: "json",
  success: function (respuesta) {
    let contenidoLista = "";
    respuesta.forEach((post) => {
      const li = `<li>${post.title}</li>`;
      contenidoLista += li;
    });
    $("#posts").html(contenidoLista);
  },
};

$("#btn").on("click", function () {
  $.ajax(peticionPosts);
});

/* EJEMPLO CON APPEND */
/* 
respuesta.forEach((post) => {
      const li = $("<li>").text(post.title);
      $("#posts").append(li);
    });
*/
