//en js las tareas no se compilan como en c 
//aca primero se ejecuta el codigo sin importar el orden en el que se escriba
//esto se llama event loop, es un ciclo que se encarga de ejecutar las tareas pendientes

// las primeras tareas que se ejecutan son las tareas sincronicas 'las del stack'
// luego se ejecutan las tareas asincronicas 'microtasks'
//luego se ejecutan las tareas asincronicas 'macrotasks' (los timers, las peticiones http, etc)
//al terminar una macrotask se ejecutan las microtasks pendientes antes de ejecutar la siguiente macrotask


//ej1 
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("E");
});

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log("F");
  });
  console.log("G");
}, 0);

console.log("H");
//la salida de este codigo es: A H C E B G F D
//explicacion: 
// primero se ejecuta el codigo sincronico A y H, 
// luego se ejecutan las microtasks C y E, 
// luego se ejecutan las macrotasks B, G y F,
//  y por ultimo se ejecuta la macrotask D

//ej2 
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("E");
});

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log("F");
  });
  console.log("G");
}, 0);

console.log("H");
//la salida de este codigo es: A H C E B G F D
//explicacion: 
// primero se ejecuta el codigo sincronico A y H,
// luego se ejecutan las microtasks C y E,
// luego se ejecutan las macrotasks B, G y F,
//  y por ultimo se ejecuta la macrotask D

//ahora con async-await
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

async function test() {
  console.log("C");

  await Promise.resolve();

  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);

  Promise.resolve().then(() => {
    console.log("F");
  });
}

test();

Promise.resolve().then(() => {
  console.log("G");
});

console.log("H");
//la salida de este codigo es: A H C G D F B E
//explicacion: 
// primero se ejecuta el codigo sincronico A y H
// luego se ejecuta la funcion test, que imprime C, 
// luego se ejecuta el await, que hace que el resto de la funcion se ejecute como una microtask,
// por lo que se ejecuta despues de las microtasks pendientes, en este caso G
// luego se ejecuta D, F, B y E, en ese orden, 
// ya que D y F son microtasks y B y E son macrotasks