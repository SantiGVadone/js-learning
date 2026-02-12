// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4, 5]
let [object1 = 0, object2 = 0] = myArray
console.log(object1, object2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [ pos1= 'Vacio' , pos2= 'Vacio', pos3= 'Vacio' , pos4= 'Vacio' , pos5 = 'Vacio',pos6 = 'Vacio'] = myArray
console.log(pos1,pos2,pos3,pos4,pos5,pos6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: 'Goku',
    age: 22,
    alias: 'Kakaroto',
    power: 99999
}
let { name, power} = person
console.log( name , 'Tiene un poder de: ' + power)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: nombre = 'Sin nombre', power: poder = 0 }= person
console.log( nombre , 'Tiene un poder de: ' + poder)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let auto ={
    marca: 'Fiat',
    modelo:'Palio',
    pintura: {
            color: 'Rojo',
            antiguedad: 5
        },
    acelerar: function (){
        console.log('El ' + this.modelo+ ' esta Acelerando')
    }
}

let {color , antiguedad} = auto.pintura
console.log('La pintura es de color ' + color + ' y tiene ' + antiguedad + ' años de antiguedad ')
// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [6,7,8,9,0]
let myArray3 = [...myArray,...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
let myArray4 = [...myArray]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let personAuto = {
    ...person,
    ...auto
}
console.log(personAuto)

// 9. Usa propagación para crear una copia de un objeto
let car= {...auto}
console.log(car)
car.modelo = 'Siena'
car.acelerar()

// 10. Combina desestructuración y propagación
let personCar2 = {...person,...car}
let {modelo : model = 'Sin modelo', name: persona } = personCar2

console.log(persona + ' tiene un ' + model )
