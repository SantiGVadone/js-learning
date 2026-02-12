//destructuring = desestructuracion 
//spreading = propagacion/ extension / esparcimiento .....
//sintaxis que nos permite extraer valores de arrays ya generados o de objetos 

//DESTRUCTURING O DESESTRUCTURACION
myArray = [1,2,3,4]

let person = {
    name: 'Pepe',
    age: 22,
    alias: 'oldMan'
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//desestructuracion
//Syntaxis Arrays 
let [ myValue0, myValue1 ] = myArray //agarra los 2 primeros valores del vector 
console.log(myValue0 + '\n' + myValue1)

//syntaxis arrays con valores por defecto/ predeterminados

let [ valor1 = 0 , valor2 = 0 , valor3 = 0 , valor4 = 0 , valor5 = 0] = myArray
console.log(valor1 + '\n' + valor2 + '\n' + valor3 + '\n' + valor4 + '\n' + valor5) 
//el valor 5 no da undefined porque le asigne un valor predeterminado de 0 

//ignorar elementos del array 
let [ , , valorA, valorB] = myArray
console.log(valorA + '\n' + valorB)

//desestructuracion objetos
//ahora es con {} en vez de []

let {name , age , alias} = person
console.log( name + ' ' + age + ' ' + alias)
 
//desestructuracion objetos con valores por defecto
let { name2 = 'Sin nombre', age2 = 0, alias2 = 'Sin alias'} = person
console.log( name2 + ' ' + age2 + ' ' + alias2)
//da todo por defecto, o UNDEFINED porque no existen esas propiedades en el objeto
//para que el objeto sepa a que variable le carga los datos, el nombre de la variable tiene que ser igual al nombre de la propiedad del objeto

//desestructuracion objetos con alias
let {name: name3= 'Sin nombre', age: age3 = 0, alias: alias3 = 'Sin alias'} = person
console.log(name3 + ' ' + age3 + ' '+ alias3)
//de esta forma el objeto sabe que el valor de la propiedad name se tiene que cargar en la variable name3 y asi con el resto

//PROPAGACION O SPREADING (...)

//sintaxis en arrays 
let myArray2 = [...myArray ] //esto es practicamente hacer una copia 
console.log(myArray2)

myArray2 = myArray //esto no es una copia, es una referencia al mismo array, si modifico el array 2 se modifica el arra 1
                    // es algo asi como los punteros en C/C++

//tambien se pueden agregar elementos en el nuevo array
let myArray3 = [10,11,12,...myArray,5,6,7,8 ]
console.log(myArray3)

//combinacion de arrays 
let myArray4 = [...myArray2,...myArray3] //se suman por asi decirlo 
console.log(myArray4)
console.log(myArray2)
console.log(myArray3)

//sintaxis en objetos
let person2 = {...person} //esto es una copia del objeto person, no de la ubicacion en memoria de esta persona 
console.log(person2)

//tambien se pueden agregar propiedades al nuevo objeto 
person2.country = 'Argentina'
console.log(person2)