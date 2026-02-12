// 1. Crea un array que almacene cinco animales
let animales = ["Pato","Perro","Gato","Vaca","Caballo"]
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
animales.push("Leon")
console.log(animales)
animales.unshift("Tigre")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3,1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(["Libro 1","Libro 2","Libro 3","Libro 4","Libro 5"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add("Libro 6")
libros.add("Libro 7")
console.log(libros)
//LOS SETS NO PERMITEN DUPLICADOS ASI QUE NO SE PUEDE LA SEGUNDA CONSIGNA
// 6. Elimina uno concreto a tu elección
libros.delete("Libro 7")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map()
meses.set(1,"Enero")
meses.set(2,"Febrero")
meses.set(3,"Marzo")
meses.set(4,"Abril")
meses.set(5,"Mayo")
meses.set(6,"Junio")
meses.set(7,"Julio")
meses.set(8,"Agosto")
meses.set(9,"Septiembre")
meses.set(10,"Octubre")
meses.set(11,"Noviembre")
meses.set(12,"Diciembre")
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
meses.has(5) ? console.log(meses.get(5)) : console.log("El mes 5 no existe")
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("Verano",["Junio","Julio","Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let vector = [1,2,3,4,5]
let set = new Set(vector)
console.log(set)
console.log(vector)
let mapa = new Map()
mapa.set(set,vector) //puedo hacerlo asi que es como yo lo entendi 
console.log(mapa)
//ESTA SERIA OTRA FORMA DE HACERLO
// mapa.set("vector",vector)
// mapa.set("set",set)
// console.log(mapa)


//CON ESTA PRUEBA VERIFICAMOS QUE LO QUE SE GUARDA EN EL MAPA NO ES UNA COPIA DEL VECTOR
//LO QUE SE GUARDA EN EL MAPA ES LA DIRECCION DE MEMORIA DE ESE VECTOR
//DE FORMA QUE SI DESPUES DE CARGAR EL VECTOR EN EL MAPA
//SE MODIFICA EL VECTOR, EL MAPA TAMBIEN SE MODIFICA
let vectorprueba = [1,2]

let mapaprueba = new Map()
mapaprueba.set("vector",vectorprueba)
console.log(mapaprueba)
vectorprueba.push(3)
console.log(mapaprueba)