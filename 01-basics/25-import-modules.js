//importacion de modulos 

//importacion de funciones, constantes o variables
import {sum,PI, Circle} from "./24-export-modules.js"

console.log(sum(2,3))
console.log(PI)

const circle = new Circle(5)
console.log(circle.area())

//importacion por defecto, se puede usar cualquier nombre para la funcion importada
import resta from "./24-export-modules.js"

console.log(resta(5,2))