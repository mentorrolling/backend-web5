// const express = require("express");
import Server from "./models/server.js";

const server = new Server();

server.listen();

// class Persona {
//   constructor(valor1, valor2, valor3) {
//     this.nombre = valor1;
//     this.edad = valor2;
//     this.correo = valor3;
//   }

//   saludar() {
//     return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
//   }
// }

// const persona1 = new Persona("Juan", 25, "example@example.com");
// console.log(persona1.saludar());
// const persona2 = new Persona("Maria", 30, "example2@example.com");
// console.log(persona2.saludar());
