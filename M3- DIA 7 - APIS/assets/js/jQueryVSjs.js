/* JS VANILLA */
/* 

let text = document.getElementById("texto");
text.addEventListener("click", function () {
  document.write("click sobre el texto");
});

 */

/* JQUERY*/
let text = $("#texto");
text.click(function () {
  document.write("click sobre el texto");
});
