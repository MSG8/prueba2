/*
  Ejercicio 3
  Crea las clases del diagrama de clases anexo.
  Los constructores de cada clase deben inicializar los atributos del objeto.

  Ejercicio3.js
  Autor: Manuel Solís Gómez(masogo008@gmail.com)
  Licencia: GPL v3 o superior
  Año 2021
*/

'use strict'

//Declara aquí las clases
class Vehiculo
{
  constructor(fechaFabricacion = new Date()) // Valor por defecto
  {
    this.fechaFabricacion = fechaFabricacion;
    this.propetario = "sin propetario"; //Por defecto no tiene propietario
  }

  vender(comprador) //se llama a vender() y coloca el nombre del comprador
  {
    this.propetario = comprador;
  }
}

class Coche extends Vehiculo
{
  constructor(fechaFabricacion = new Date() , matricula = "sin definir", combustible = "sin definir", esNuevo) //Pongo valores por defecto
  {
    super(fechaFabricacion); //Llamamos a super para cambiar valores de la clase padre
    this.matricula = matricula; // Colocamos sin definir por defecto y si el usuario lo dice, se cambia a lo que quiere
    this.combustible = combustible;
    this.esNuevo = esNuevo;
  }
}

class Bicicleta extends Vehiculo
{
  constructor(fechaFabricacion = new Date() , color = "sin definir") //Pongo valores por defecto
  {
    super(fechaFabricacion); //Llamamos a super para cambiar valores de la clase padre
    this.color = color; // Colocamos sin definir si el usuario no dice el color y si lo dice se coloca en su atributo
  }
}


//Programa de Prueba
const coche = new Coche(new Date(1995, 11, 17), 'BA-1234-YZ', 'Diesel')
if (coche.fechaFabricacion.valueOf() !== (new Date(1995, 11, 17)).valueOf())
  console.error('Fallo 1: ' + coche.fechaFabricacion)
if (coche.matricula !== 'BA-1234-YZ')
  console.error('Fallo 2: ' + coche.matricula)
if (coche.combustible !== 'Diesel')
  console.error('Fallo 3: ' + coche.combustible)
if (!coche.esNuevo)
  console.error('Fallo 4: ' + coche.esNuevo)
if (coche.propietario)
  console.error('Fallo 5: ' + coche.propietario)

coche.vender('Pepe')
if (coche.propietario !== 'Pepe')
  console.error('Fallo 6: ' + coche.propietario)
if (coche.esNuevo)
  console.error('Fallo 7: ' + coche.esNuevo)

const bici = new Bicicleta(new Date(2000, 11, 17), 'rojo')
if (bici.fechaFabricacion.valueOf() !== (new Date(2000, 11, 17)).valueOf())
  console.error('Fallo 8: ' + bici.fechaFabricacion)
if (bici.propietario)
  console.error('Fallo 9: ' + bici.propietario)
if (bici.color !== 'rojo')
  console.error('Fallo 10: ' + bici.color)
