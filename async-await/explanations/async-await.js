// req: es la peticion
// res: es la respuesta

/*
Se utiliza la palabra reserveda await, lo q se escribe a continuacion del await le dice al programa
q es un codigo q va a tomar tiempo (asi como se manejaba en callback o promesas).

En este caso se hace una consulta a la BD de un usuario, esto se puede guardar en una 
variable o no (aqui se guarda en una variable).

Para q funcione await tiene q ponerse dentro de funciones async function, por eso
antes de escribir 'function'se escribe la palabra clave 'async'.

¿Como se maneja los errores en programacion sincrona? Se utiliza el try-catch
Pero ¿que pasa en codigo asincrono? ¿como se manejan los errores? De la misma forma con try-catch

*/

async function requestHandler(req, res) {

    try {
        const user = await User.findById(req.userId) // Esto es una operacion asincrona n°1 q se guarda en una variable
        const tasks = await Tasks.findById(user.tasksId);   // Esto es una operacion asincrona n°2 q se guarda en una variable
    
        tasks.completed = true;
        await tasks.save();   // Esto es una operacion asincrona n°3 q NO se guarda en una variable (en caso devuelva algo esta operacion se podria almacenar en una variable)
    
        res.send('Task completed'); // Se envia una respuesta al navegador
    }
    catch (e) {
        res.send(e);    // Se envia el/los error(es) al navegador
    }




}