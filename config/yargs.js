//REQUIRES

//---------------REQUIRES CREADOS POR MI----------


//---------------REQUIRES De Node-----------------

const opcionesRepetidas = {
    //Es el comando que el usuario tiene que escribir
    base: {
        //Le digo al usuario que es un comando obligatorio
        demand: true,
        //Es otro nombre que se le puede dar
        alias: "b",
    },
    Limite: {
        alias: "l",
        //Valor definido por si el usuario no manda un valor
        default: 10,
    },
};
const argv = require("yargs")
    .command(
        "Listar", //COmando
        "Imprime en consola la tabla de multiplicar", //Ayuda al usuario de lo que hase
        opcionesRepetidas,
    )
    .command(
        "Crear", //COmando
        "Crea la tabla de multiplicar", //Ayuda al usuario de lo que hase
        opcionesRepetidas,
    )
    .help().argv; //Es un comando de ayuda al usuario

//---------------REQUIRES Externos---------

//FIN DE LOS REQUIRES

module.exports = {

    argv

}