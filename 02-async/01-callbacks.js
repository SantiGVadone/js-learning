//callbacks 
// un callback es una función que se pasa como argumento a 
// otra función y se ejecuta después de que se complete una tarea asincrónica.

//este es un ejemplo de una funcion que utiliza un callback para mostrar un resultado
const sum = (a, b , callback) =>{
    callback(a + b);
}

sum(2, 3, (result) => {
    console.log(`El resultado de la suma es: ${result}`)
})

//por ejemplo si queremos simular el ingreso de un usuario 
//podemos hacer un function que recibe un usuario , esa activa un callback que revisa si el usuario es correcto o no
// y esa funcion de callback se ejecuta despues de un tiempo para simular una tarea asincrona

const login = (username, password, callback) => { //le paso el user, pass y el callback
    setTimeout(() => { //simulo una tarea asincrona con setTimeout
        if(username === 'admin' && password === '1234'){ //chequea el user y pass
//si el user y pass son correctos, ejecuta el callback con null (sin error) y un objeto con los datos del usuario
            callback(null, {username: 'admin', role: 'administrator'}); 
        } else {
//si el user o pass son incorrectos, le mando un error al callback
            callback(new Error('Invalid credentials'), null);
        }
    }, 1000) //el callback se ejecuta despues de 1 segundo
}

//llamo a la funcion ahora 
const user = 'admin'
const password = '1234'

login(user, password, (error, userData) => {
    if(error){
        console.error(error.message);
        console.log(`El usuario ${userData.username} y/o la contraseña ${userData.password} no son validos`);
    }else{
        console.log(`Bienvenido ${userData.username}, tu rol es ${userData.role}`);
    }

})

// otra funcion de los callbacks es la de setTimeout, que ejecuta una función después de un tiempo determinado
setTimeout(() => {
    console.log('Esto se muestra después de 2 segundos');
}, 2000)

//otra utilidad de los callbacks es la de manejar eventos, por ejemplo con addEventListener en el navegador
// document.getElementById('myButton').addEventListener('click', () => {
//     console.log('El botón fue clickeado');
// })

// en resumen, los callbacks son una forma de manejar tareas asincrónicas en JavaScript, 
// permitiendo que el código se ejecute de manera no bloqueante y responda a eventos o 
// resultados de operaciones asincrónicas.

// sin embargo, el uso excesivo de callbacks puede llevar a lo que se conoce como "callback hell" o
//  "infierno de callbacks",
//ejemplo de callback hell
login('admin', '1234', (error, userData) => {
    if(error){
        console.error(error.message);
    }else{
        console.log(`Bienvenido ${userData.username}, tu rol es ${userData.role}`);
        //supongamos que ahora queremos obtener los permisos del usuario, y eso también es una tarea asincrona
        const getPermissions = (username, callback) => {
            setTimeout(() => {
                callback(null, ['read', 'write', 'delete']);
            }, 1000);
        }
        getPermissions(userData.username, (error, permissions) => {
            if(error){
                console.error(error.message);
            }else{
                console.log(`Los permisos de ${userData.username} son: ${permissions.join(', ')}`);
                //y si ahora queremos mostrar un mensaje de bienvenida personalizado, y eso también es asincrono
                const getWelcomeMessage = (username, callback) => {
                    setTimeout(() => {
                        callback(null, `Bienvenido ${username}!`);
                    }, 1000);
                }
                getWelcomeMessage(userData.username, (error, message) => {
                    if(error){
                        console.error(error.message);       
                    }else{
                        console.log(message);
                    }
                })
            }
        })
    }
})

//seria algo comparado a hacer un if adentro de un if adentro de un if y asi sucesivamente, 
// lo que hace que el codigo sea dificil de leer y mantener
// en el caso del if, esto se soluciona con un switch o con funciones separadas, pero en el caso de los callbacks,
// la solución es usar promesas o async/await, que veremos en las siguientes secciones.
