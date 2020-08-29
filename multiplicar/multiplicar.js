//Require 
//Requires de node
const fs = require('fs'); //Ya existen en las librerias de node

//Requires mios


//Requires externos
var colors = require('colors'); //Colores


//Link:
https: //nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
    //const fs = require('express');//SOn extenciones que otras personas hisiaron por nosostros
    //const fs = require('./fs');//SOn requires que nosostros creamos en nuestros proyectos


    /*
        var crearArchivo = async(base) => {

            if (!Number(base)) //si no es un numero
            {
                return "No es un numero";
            }

            var data = "";

            for (let i = 1; i <= 10; i++) {
                data += `${base} * ${i} = ${base * i} \n`;
            }


            fs.writeFile(`tablas/Tabla-del-${base}.txt`, data, (err) => {
                if (err) throw new Error(err)
            });
            return `Tabla-del-${base}.txt`;

        }
    */

    var listarTabla = (base, limite = 10) => {

        console.log("=======================".green)
        console.log(`===Tabla del ${base}===`.red)
        console.log("=======================".green)

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} \n`.yellow);
        }

    }


var crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        var data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/Tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Tabla-del-${base}-al-${limite}.txt`.bgWhite.blue);
        });
    });



}

//Exportaciones de modulos
module.exports = {

    crearArchivo,
    listarTabla

}