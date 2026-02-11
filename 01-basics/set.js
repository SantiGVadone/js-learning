//set es otro tipo de dato

//como se declaran 
let set = new Set()

//inicializacion 
set = new Set(["Santiago","Vadone"])
console.log(set)

//metodos comunes 

//operaciones

//add y delete
set.add("Buenos Aires")
console.log(set)

set.delete("Buenos Aires") //elimina por contenido no por posicion y si borra nos da un true
console.log(set)

//has 
console.log(set.has("Santiago")) //da true porque se encuentra en el set
console.log(set.has("Buenos Aires")) //da false porque no se encuentra en el set

//size
console.log(set.size) //nos da el tamaño del set

//convertir un set a array
let array = Array.from(set)
console.log(array) //si vemos en el prin ahora lo muesta con [] mientras que el set lo muestra con {}

//convertir un array a un set
let set2 = new Set(array)
console.log(set2) 

//los set NO PERMITEN DUPLICADOS
set2.add("Vadone")
set2.add("Vadone")
set2.add("Vadone")
set2.add("Gabriel")
set2.add("Gabriel")
set2.add("Gabriel")

console.log(set2)
//como no acepta duplicados, por eso puedo entrar por contenidos, no por posicion, 
//ya que no importa la posicion total no hay otro contenido igual en otra posicion