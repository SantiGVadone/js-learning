//las pormesas son objetos que representan la terminación o el fracaso de una operación asíncrona y su valor resultante
//una promesa puede estar en uno de tres estados: pendiente, cumplida o rechazada
//ejemplo de una promesa que se resuelve después de 2 segundos

const promes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('¡Promesa cumplida!');
    }, 2000);
});
//para consumir la promesa, se utiliza el método .then() para manejar el resultado cuando la promesa se cumple y .catch() para manejar cualquier error si la promesa es rechazada

console.log('Esperando la promesa...');
promes.then((resultado) => {
    console.log(resultado); // Imprime: ¡Promesa cumplida!
}).catch((error) => {
    console.error('Error:', error);
});

//también se pueden encadenar promesas para realizar operaciones secuenciales

const promes2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 1000)
    }).then((resultado) => {
        console.log('Resultado de la primera promesa:', resultado) // Imprime: Resultado de la primera promesa: 5
        return resultado * 2; // Devuelve 10 para la siguiente promesa
    }).then((resultado) => {
        console.log('Resultado de la segunda promesa:', resultado) // Imprime: Resultado de la segunda promesa: 10
    }).catch((error) => { // Maneja cualquier error que ocurra en la cadena de promesas
        console.error('Error:', error)//entonces me ahora el tener que poner muchos catchs 
    });

promes2.then((resultado=5) => {
    console.log('Resultado final:', resultado) // Imprime: Resultado final: 10
}).catch((error) => {
    console.error('Error:', error)
});

//las promesas son una forma de solucionar el callback hell 
promes3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('¡Promesa 3 cumplida!');
    }, 1500);
})

promes3.then((resultado) => {
    resultado = '10' // Asignamos el valor '10' a resultado
    console.log('Resultado de la promesa 3:', resultado) // Imprime: Resultado de la promesa 3: 10
}).then((resultado) => {
    resultado = resultado + asd // Esto generará un error porque 'asd' no está definido
    console.log('Resultado final de la promesa 3:', resultado) // Imprime: Resultado final de la promesa 3: 10
}).catch((error) => {
    console.error('Error en la promesa 3:', error)
});