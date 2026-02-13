//exportacion de modulos 

//puedo exportar funciones
export function sum(a,b){
    return a+b
}

//puedo exportar constantes o variables
export const PI= 3.1416

export class Circle {
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius,2) //math.pow es para elevar a una potencia, en este caso al cuadrado
    }
}


//puedo exportar 'POR DEFECTO'
export default function substraccion(a,b) {
    return a - b
}

// Esto da error porque no puede haber mas de 1 exportacion por defecto en un mismo archivo
// export default function substraccion2(a,b) {
//     return a - b
// }