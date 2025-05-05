
/*
Una promesa esta formada por un metodo .then() y .catch(). 
El metodo .then() es cuando todo va bien, es el dato q esperamos.
El metodo .catch() ocurre cuando pasa algun error.
*/

function requestHandler(req, res) {
    User.findById(req.userId)   // Esto es una operacion asincrona n°1
        .then(function(user){
           return Tasks.findById(user.taskId) // Esto es una operacion asincrona n°2
        })

        .then(function(tasks){
            tasks.completed = true;
            return tasks.save();    // Esto es una operacion asincrona n°3
        })

        .then(function(){
            res.send('Task completed');
        })

        .catch(function(errores){   // Este catch va a capturar los errores de la primera consulta como de la segunda
            res.send(errores);
        })
}