//excepcion 
let myObject
// console.log(myObject.name) //TypeError: no se puede leer la propiedad name porque no se definio 

//manejo de errores
//try-catch 
try {
    console.log('try-catch')
    console.log(myObject.name)
}catch (error) {
    console.log("Se produjo un error: " + error.message)
}

//finally 
try {
    console.log('finally')
    console.log(myObject.name)
}catch (error) {
    console.log("Se produjo un error: " + error.message)
}finally {
    console.log( 'Este bloque se ejecuta siempre, independientemente de si hubo un error o no.' )
}

//trhow //pongo el try-catch porque sino no se va a compilar la linea de abajo
try{
    throw new Error ('Se produjo un error personalizado') 
    }catch(error){
    console.log('Error capturado: '+ error.message)
}

console.log(sum(2,3))

function sum(a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new myCustomSum ('Los valores deben ser numericos', a, b)
    }else{
        return a+b
    } 
}



//aca voy a usar el throw new Error que use antes para que el try lo reconozca y poder manejar ese error
try {
    console.log(sum('2','3'))
}catch(error){
    console.log('Se produjo un error: '+error.message)
}

//Crear excepciones personzalizadas
class myCustomSum extends Error {
    constructor (message, a, b){
        super(message)
        this.a =a
        this.b =b 
    }

    printNumbers(){
        console.log(this.a , this.b) 
    }
}

try {
    console.log(sum('2','3'))
}catch(error){
    console.log('Se produjo un error: '+ error.message)
    error.printNumbers()
}
