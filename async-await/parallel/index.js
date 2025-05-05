const { taskOne, taskTwo } = require('./tasks');

async function main() {
    try {
        console.time('Measuring time');

        // Para ejecutar codigo paralelo se pone en esta linea de codigo Promise.all([]) dentro de estos '[]' se escribe
        // el codigo asincrono, como me devuelve dos valores se almacena en mi variable results (array)
        const results = await Promise.all([taskOne(), taskTwo()])
    
        console.timeEnd('Measuring time');
    
        console.log('Task One Returned', results[0]);
        console.log('Task Two Returned', results[1]);
    }

    catch(e) {
        console.log(e)
    }

};


main();