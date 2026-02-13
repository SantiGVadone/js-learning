// 1. Captura una excepción utilizando try-catch
let myObject
//lo dejo vacio para que de error
try {
    console.log(myObject.name)//esto va a dar error porque no tiene la propiedad name el objeto 
}catch(error){
    console.log('Ha ocurrido un error: ' + error.message)
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(myObject.name)
}catch(error){
    console.log('Ha ocurrido un error: ' + error.message)
}finally{
    console.log(myObject)
}

// 3. Lanza una excepción genérica
try{
    throw new Error ('Esto es un error personzalizado')
}catch(error){
    console.log('Ha ocurrido un error personalizado:' + error.message)
}
// 4. Crea una excepción personalizada
function validateNumber(value){
    if (typeof value !== 'number'){
        throw new CustomError('El valor debe ser un número')
    }else{
        return true
    }
}

class CustomError extends Error{
    constructor (message){
        super(message)
    }
    printError(){
        console.log('Error personalizado: ' + this.message)
    }
}
// 5. Lanza una excepción personalizada
try{
    validateNumber('hola')
}catch(error){
    if(error instanceof CustomError){
        error.printError()
    }else{
        console.log('Error desconocido: ' + error.message)
    }
}

// 6. Lanza varias excepciones según una lógica definida
function validateInput(value){
    if (typeof value === 'undefined'){
        throw new Error('El valor no puede ser undefined')
    }else if (typeof value !== 'number'){
        throw new CustomError('El valor debe ser un número')
    }else{
        return true
    }
}
try{
    validateInput(undefined)
    validateInput('hola')
}catch(error){
    if(error instanceof CustomError){
        error.printError()
    }else{
        console.log('Error desconocido: ' + error.message)
    }
}

// 7. Captura varias excepciones en un mismo try-catch
try{
    validateInput(undefined)
    validateInput('hola')
}catch(error){
    if(error instanceof CustomError){
        error.printError()
    }else{
        console.log('Error desconocido: ' + error.message)
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let values = ['3.14', 'abc', '2.71', undefined, '1.62']
for (let value of values){
    try{
        let number = parseFloat(value)
        if (isNaN(number)){
            throw new Error('El valor no es un número válido')
        }
        console.log(number)
    }catch(error){
        console.log('Error al parsear el valor: ' + value + ' - ' + error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function checkProp(obj, prop){
    if (!obj.hasOwnProperty(prop)){
        throw new CustomError('El objeto no tiene la propiedad ' + prop)
    }else{
        return true
    }
}
try{
    checkProp({name: 'Juan'}, 'age')
}catch(error){
    if(error instanceof CustomError){
        error.printError()
    }else{
        console.log('Error desconocido: ' + error.message)
    }
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function retryFunction(func, maxRetries = 10) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            return func();
        } catch (error) {
            retries++;
            console.log(`Intento ${retries} fallido: ${error.message}`);
        }
    }
    throw new Error(`Se superó el número máximo de reintentos (${maxRetries})`);
}