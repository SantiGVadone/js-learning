//var  ES UNA VAR MAS GLOBAL Y VIEJA ES PELIGROSA POR ESO NO SE USA TANTO
//const no se le puede cambiar el nombre
const nombre = "santiago"
var saludo = 2
console.log(saludo+" "+nombre)
saludo = "Adios"
// nombre="Santi" da error porque al ser de tipo const, no se le puede cambiar el valor
console.log(saludo+" "+nombre)

//estas son las 2 mejores formas de declarar variables , SIEMPRE HAY QUE INTENTAR USAR LET Y CONST 

//let ES LOCAL Y NO SE SALE DE LOS BLOQUES 
let nombre2 = "santiago"
let saludo2 = "Hola"
console.log(saludo2+" "+nombre2)
saludo2 = "Adios"
nombre2="Santi"
console.log(saludo2+" "+nombre2)

//const ES UNA VARIABLE A LA CUAL NO LE PODES CAMBIAR EL VALOR, ES UNA REFERENCIA CONSTANTE 
const nombre3 = "santiago"
const saludo3 = "Hola"
console.log(saludo3+" "+nombre3)

//pero si podes cambiar el valor de lo que le hace referencia 
//ej 
const USER = {
    nombre:"santiago"
}
console.log(USER.nombre)
USER.nombre="Santi"
console.log(USER.nombre)
//NO ESTAMOS CAMBIANDO EL VALOR DE USER SINO DE USER.NAME OSEA QUE ESO SI SE PUEDE