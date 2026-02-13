// 1. Exporta una función
export function hello(name){
    console.log('Hello '+name)
}
// 2. Exporta una constante
export const PI = 3.1416
// 3. Exporta una clase
export class Car {
    constructor(brand, model, year){
        this.brand= brand
        this.model= model
        this.year= year
    }
}
// 4. Importa una función
import { hello } from './26-modules-exercises.js'
hello('World')
// 5. Importa una constante
import { PI } from './26-modules-exercises.js'
console.log(PI)
// 6. Importa una clase
import { Car } from './26-modules-exercises.js'
const myCar = new Car('Toyota', 'Corolla', 2020)
console.log(myCar)
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function greet(name){
    console.log('Greetings, '+name)
}
// export default const EULER = 2.7183 //no la puedo exportar por defecto porque ya exporté una función por defecto
// export default class Person { //no la puedo exportar por defecto porque ya exporté una función por defecto
//     constructor(name, age){
//         this.name= name
//         this.age= age
//     }
// }
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import greet from './26-modules-exercises.js'
greet('Alice')
import { EULER } from './26-modules-exercises.js' //no la puedo importar porque no la exporté por defecto
import { Person } from './26-modules-exercises.js' //no la puedo importar porque no la exporté por defecto

// 9. Exporta una función, una constante y una clase desde una carpeta
export function sayGoodbye(name){
    console.log('Goodbye '+name)
}
export const GRAVITY = 9.81
export class Bike {
    constructor(brand, model){
        this.brand= brand
        this.model= model
    }
}
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { sayGoodbye } from 'aca puede ir cualquier ruta'
sayGoodbye('Bob')
import { GRAVITY } from 'aca puede ir cualquier ruta'
console.log(GRAVITY)
import { Bike } from 'aca puede ir cualquier ruta'
const myBike = new Bike('Giant', 'Defy')
console.log(myBike)
