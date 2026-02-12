// 1. Crea un objeto con 3 propiedades
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo"
}
// 2. Accede y muestra su valor
console.log(auto)
// 3. Agrega una nueva propiedad
auto.estado  = 'Nuevo'
console.log(auto)
// 4. Elimina una de las 3 primeras propiedades
delete auto.color
console.log(auto)
// 5. Agrega una función e invócala
auto.anda = function (){
    console.log('El '+ this.modelo +' esta andando')
}
console.log(auto)
auto.anda()
// 6. Itera las propiedades del objeto
for(let key in auto){
    console.log(key+': '+auto[key])
}
// 7. Crea un objeto anidado
let terreno = {
    frente: 10,
    largo: 25,
    casa: {
        metros: '32',
        color: 'rojo',
        estado: 'nuevo',
        luces: 'encendidas',
        apagar: function(){
            this.luces = 'apagadas'
            console.log('Las luces fueron apagadas')
        },
        encender: function(){
            this.luces = 'encendidas'
            console.log('Las luces fueron encendidas')
        }
    }
}
console.log(terreno)
console.log(terreno.casa)
terreno.casa.apagar()
console.log(terreno.casa)
terreno.casa.encender()
console.log(terreno.casa)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(terreno)
console.log(terreno.casa)
terreno.casa.apagar()
console.log(terreno.casa)
terreno.casa.encender()
console.log(terreno.casa)
// 9. Comprueba si los dos objetos creados son iguales
//no van a ser iguales porque se compara la direccion de memoria no el contenido 
let auto2 = { // creo un auto completamente igual al auto 3 
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo"
}
let auto3 = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo"
}
console.log(auto2==auto3)
console.log(auto2===auto3)
console.log(auto2.marca==auto3.marca)
console.log(auto2.modelo===auto3.modelo)
console.log(auto2.color===auto3.color)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(auto2.marca==auto3.color) // da false porque el contenido es diferente 
console.log(auto2.marca===auto3.marca) // da true porque el contenido es igual