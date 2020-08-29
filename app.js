//REQUIRES

//---------------REQUIRES CREADOS POR MI----------
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv; //SOlo manda lo mas importante del argv es como la destructuracion

//---------------REQUIRES De Node-----------------



//---------------REQUIRES Externos---------
var colors = require('colors'); //Colores
//FIN DE LOS REQUIRES

//EJERCICIO 2

var comando = argv._[0];




switch (comando) {

    case "Listar":
        listarTabla(argv.b, argv.l);
        break;
    case "Crear":
        crearArchivo(argv.b, argv.l)
            .then(archivo => { console.log(`archivo creado: ${archivo}`) })
            .catch(err => { console.log(err) });
        break;

    default:
        console.log("COmando no reconocido");
}



/*
Ejemplos de prueba para ele ejercicio 2
let argv2 = process.argv;

console.log("Limite: ", argv.Limite);
*/








/*EJERCICIO 1

const fs = require("fs");
const { crearArchivo } = require("./multiplicar/multiplicar");

let base = "1";




crearArchivo(base)
    .then(archivo => { console.log(`archivo creado: ${archivo}`) })
    .catch(err => { console.log(err) });*/