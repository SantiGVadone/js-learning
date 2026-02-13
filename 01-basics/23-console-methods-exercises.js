// 1. Crea un función que utilice error correctamente
function mostrarError(mensaje){
    console.error(mensaje)
}
mostrarError("Este es un mensaje de error")
// 2. Crea una función que utilice warn correctamente
function mostrarWarn(mensaje){
    console.warn(mensaje)
}
mostrarWarn("Este es un mensaje de advertencia")
// 3. Crea una función que utilice info correctamente
function mostrarInfo(mensaje){
    console.info(mensaje)
}
mostrarInfo("Este es un mensaje informativo")
// 4. Utiliza table
const persons =[
    {name: 'Juan', age: 30},
    {name: 'Maria', age: 25},
    {name: 'Pedro', age: 35}
]
console.table(persons)

// 5. Utiliza group
console.group('Datos de la persona')
console.log('Nombre: Juan')
console.log('Edad: 30')
console.groupEnd()

// 6. Utiliza time
console.time('Tiempo de ejecución')
for(let i=0; i<1000000; i++){
    //aca iria el codigo
}    
console.timeEnd('Tiempo de ejecución')
// 7. Valida con assert si un número es positivo
let edad = -5
console.assert(edad > 0, 'La edad no puede ser negativa')
// 8. Utiliza count
console.count('Person')
console.count('Person')
console.count('Person')
console.count('Person')
console.count('Person')

// 9. Utiliza trace
function a(){
    b()
}
function b(){
    console.trace('Seguimiento de la pila')
}
a()
// 10. Utiliza clear
console.clear()