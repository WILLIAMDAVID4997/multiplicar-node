let fs = require('fs');
const color = require('colors');


let listarTabla = (numero, limite = 10 ) => {

    console.log('====================='.green);
    console.log(`Tabla del ${numero}`);
    console.log('====================='.blue);

    let contenido = '';

    for(let i = 1; i < limite; i++){
        console.log(`${numero} X ${i} = ${numero * i}\n`); 
    }

}



let crearArchivo = (numero, limite = 10) => {

    return new Promise((resolve, reject) =>{

        if(!Number(numero)){ //si el parametro no es un numero 
            reject(`El valor introducido:  ${numero} no es un numero `) // devulve la siguiente cadena
            return;
        }

        let contenido =''; // variable auxiliar que va a contener el resultado de la operacion 

        for(let i = 1; i < limite; i++){
            contenido += `${numero} X ${i} = ${numero * i}\n`; // le añadimos la operacion a la variable auxiliar
        };


        fs.writeFile(`tablas/tabla-${numero}-al-${limite}.txt`, contenido, (err) => { 
            if (err){
               reject(err); 
            }else{
                resolve(`El archivo tabla-${numero}-al-${limite} ha sido creado con exito`);
            }
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}



