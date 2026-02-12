//ahora vamos a ver lo que son los map/s o mapa/s en js
//tiene por cada fila 2 elementos, 
// una clave que se llama key la cual apunta a un valor que se llama value
//por ej puede ser algo asi:
// 'name' -> 'santiago'
// 'lastname' -> 'vadone'
// vamos a crear este map

let map = new Map()
console.log(map)

map = new Map([
    ['name','santiago'],
    ['lastname','vadone']
])
console.log(map) //imprime el size y clave=>valor, clave=> valor

//metodos y propiedades 

//set
map.set('age',22)//añade un valor indicandole un alia
console.log(map) 
//sirve para sobre escribir values tambien 
map.set('name','Gabriel')
console.log(map)

//get
console.log(map.get('name')) //obtengo el valor de la clave name
//si la clave no existe te da undefined  por eso se usa el has
//has
console.log(map.has('name')) //me dice si tengo alguna clave que sea name

//delete
map.delete('name')
console.log(map)

//size
console.log(map.size)

//keys nos da un listado de las claves
console.log(map.keys())

//values nos da un listado de los valores
console.log(map.values())

//entrys nos lista todo 
console.log(map.entries())

//clear
map.clear()
console.log(map)
