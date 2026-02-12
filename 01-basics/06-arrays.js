//esto serian los vectores 

//se declaran casi igual que en c 

let array1 = []
let array2 = new Array()

console.log(array1)
console.log(array2)

array1 = [1]
array2 = new Array(1)  
//si vemos el console log nos damos cuenta que lo que esta haciendo es reservar 1 lugar 
//si hicieramos array2 = new Array(3) lo que imprimiria el console-log seria que el array tiene 
//3 elementos vacios, "3 empty items"
//mientras que de la otra forma se le esta asignando un 1 en la posicion 0
console.log(array1)
console.log(array2) 

//pero si le metes mas numeros separados por ',' si te lo genera igual 

array1 = [1,2,3]
array2 = new Array(1,2,3)
console.log(array1)
console.log(array2)

//y es dinamico como el resto de las variables 

array1[2] = 'Santiago' //hay que tener en cuenta que inicia desde el 0 como en c 
console.log(array1)

let vector = [1,2,3]

vector.push("Santiago")
vector.push("Vadone")//el push agrega al final del vector
vector.push(22)

console.log(vector)

vector.pop() //pop elimina la ultima posicion pero tambien la devuelve, osea que si hago un 
//console log(vector.pop()) //imprimo el ultimo elemento y al mismo tiempo lo estoy borrando

console.log(vector)

vector.shift() //elimina el primer elemento y lo devuelve como el pop
console.log(vector)

vector.unshift("Buenos Aires","Argentina")//agrega elementos al principio
console.log(vector)

let tamaño = vector.length //mide al vector

console.log(tamaño)

let nvector = vector.slice(1,2) //esto te devuelve los elementos que hay en el vector desde el 1 hasta el 2 sin tener en cuenta el 2

console.log(nvector)

vector.splice(1,3) //elimina desde el elemento 1 3 lugares para adelante
//osea que es como si se posiciona en 1 y hace 3 i++ eliminando los vector[i]
console.log(vector)