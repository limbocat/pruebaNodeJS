const funciones = require("./ProfeFuriosa");
const fs = require("fs");
const express = require('express');

let [, , cantidadMinima, ...ingresos] = process.argv;

console.log(funciones.seAbre(cantidadMinima, ...ingresos));

let jsonVar = {
    clave: "valor",
    clave2: "valor2"
};


