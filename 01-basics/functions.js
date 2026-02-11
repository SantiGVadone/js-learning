//funciones

function myFunction(){
    console.log("Hola desde la funcion")
}

myFunction()
//las funciones son como en C se declaran se les da un nombre y se les da  parametros
//existen las funciones anonimas 
//para poder usarlas hay que almacenarlas en alguna variable ej 
const myFunc2 = function(name){
    console.log("Hola "+name)
}
myFunc2('Santiago')
myFunc2('Gabriel')

//arrow functions o funciones flecha 
const myFunc3 = (name) => {
    console.log("Hola "+name)
}
myFunc3('Santiago')
myFunc3('Gabriel')
//las funciones tambien funcionan con los result igual que en c 
function nombre(){
    a= "santiago"
    return a
}
console.log(nombre())

//tambien puede haber funciones dentro de funciones como en c y se respeta la memoria en los {}

function externa(){
    console.log('Funcion externa')
    function interna(){
        console.log('Funcion interna')
    }
    interna()
}
externa()
//interna() //no la puedo llamar desde aca, solo desde dentro de externa()

//tamebi puedo mandar como paramentro una funcion que tiene sus propios parametros 
function multiplicar(a , b){
    return a*b
}
function imprimir(func,param,param2){
    console.log(func(param,param2))
}
imprimir( multiplicar , 2, 3)

//for each no solo funciona con vectores, tambien con los set's y los map's 
vector = [1,2,3,4]

vector.forEach((value) => {console.log(value)})