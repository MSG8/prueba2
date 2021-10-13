/*
  Ejercicio 2
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.

  Ejercicio2.js
  Autor: Manuel Solís Gómez(masogo008@gmail.com)
  Licencia: GPL v3 o superior
  Año 2021
*/

'use strict'
//Variable de entrada
// CONST fecha = new Date(1995, 11, 17); // Introducimos la fechs que queremos
// comprobarEdad(fecha); // Llamamos a la funcion de comprobar la edad

//Funcion
function comprobarEdad(fecha)
{
  let anios = calcularEdad(fecha); // pasamos la fecha de cumpleaños y nos devolvera su edad
  if (anios < 18)
  {
    console.log('Es MENOR de edad');
  }
  else
  {
    console.log('Es MAYOR de edad');
  }
}

function calcularEdad(fecha) //  sacado de https://es.stackoverflow.com/questions/31373/obtener-la-edad-a-partir-de-la-fecha-de-nacimiento-con-javascript-y-php/31380
{
    let hoy = new Date(); // fecha actual
    let cumpleanos = new Date(fecha); //fecha de cumpleaños
    let edad = hoy.getFullYear() - cumpleanos.getFullYear(); // coge los años y los resta
    let mes = hoy.getMonth() - cumpleanos.getMonth(); // coge los meses y los resta

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate()))
    {
        edad--;
    }

    return edad;
}
