
const argv = require('./config/yarg').argv;
const color = require('colors');

let {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
        .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// let argv2 = process.argv;
// let parametro = argv[2];
// let numero = parametro.split('=')[1]

