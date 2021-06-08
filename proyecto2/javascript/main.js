// DOM
// querySelector (1 elemento) / querySelectorAll (todos los que cumplan con el criterio de busqueda y se transforma a lista)
/*
let links = document.querySelectorAll("a");
// No se tiene que cambiar constantemente el nombre de la variable solo tiene que reflejar lo que tiene almacenado
links.forEach(function(link){
  console.log(link);
})
//arreglo este es parte de todos los arreglos que hay, recibe la ejecucion de este metodo una funcion para declara colocamos (function(){})
*/

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this)
  });
});

// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close")

//recorrerlos
links.forEach(function(link){
  //agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    // quitarle las clases de animación que ya tiene
    content.classList.remove("animate__backInUp");
    content.classList.remove("animate__animated");

    // agregarle clases para animar su salida fadeOutUp
    content.classList.add("animate__fadeOutUpBig");
    content.classList.add("animate__animated");

    // redirecciona despues de cierto tiempo una sola vez
    setTimeout(function(){
      location.href = "/proyecto2";
    },500);
    // setInternal (despues de cierto tiempo constantemente)
    return false;

  });
});
