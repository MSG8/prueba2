/*
  Ejercicio 4
  Corrige los 5 errores que impiden ejecutar la película.

  Ejercicio4.js
  Autor: Manuel Solís Gómez(masogo008@gmail.com)
  Licencia: GPL v3 o superior
  Año 2021
*/
'use strict'

class Pelicula
{
  constructor()
  {
    window.onload = this.iniciar.bind(this); //No decias cuando llamar a iniciar()
  }

  iniciar()
  {
    const p1 = new Personaje('Ana')
    const p2 = new Personaje('Blas')

    p1.hablar(`Ya me tienes harta ${p2.nombre}`);
    p2.hablar(`¡Pues anda que tú a mi ${p1.nombre}!`);

    do
    {
      p1.dispararA(p2)
      if (p2.vivo)
        p2.dispararA(p1)
    }while (p1.vivo && p2.vivo);

    console.log('THE END');
  }
}

class Personaje
{
  constructor(nombre) //Faltaba llamar al parametro del nombre
  {
    this.nombre = nombre
    this.arma = new Arma()
    this.vivo = true
  }
  hablar(texto)
  {
    console.log(`${this.nombre}: ${texto} `) //Mal uso de comillas simples y dobles
  }
  dispararA(personaje)
  {
    this.arma.disparar() //Fallo al no poner this.arma ya que no sabe que se refiere a ese objeto
    if (Math.random() < 0.3)
    {
      personaje.hablar('¡Maldita sea! ¡Me has dado!')
      personaje.vivo = false
      this.hablar('Te lo advertí. Ja, ja, ja')
    }
    else
      personaje.hablar('¡Has fallado!')
  }
}

class Arma
{
  disparar()
  {
    console.log('¡¡PUM!!')
  }
}

new Pelicula()
