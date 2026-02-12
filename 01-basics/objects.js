//objects

//sintaxis 
let person = {
    name: "Santiago",
    lastname: "Vadone",
    age: 22,
    alias: "SV Code"
}

//Acceso a las propiedades 
console.log(person.name)
console.log(person.lastname)
console.log(person.age)
console.log(person.alias)
console.log(person)
console.log(person['name'])
console.log(person['lastname'])
console.log(person['age'])
console.log(person['alias'])

//modificar una propiedad 
person.name = "Gabriel"
console.log(person)

//eliminar una propiedad entera 
delete person.age
console.log(person)

//añadir una propiedad
person.country = "Argentina"
console.log(person)

//metodos (funciones)
let person2 = {
    name: 'Pepe',
    age: 40,
    alias: 'Pelotudo',
    walk: function(){
        console.log(this.name+" esta caminando")
    }
}

person2.walk()

//anidacion de objects 
let person3 = {
    nombre: 'Pepe',
    age: 40,
    alias: 'Pelotudo',
    walk: function(){
        console.log(this.name+" esta caminando")
    },
    job: {
        name: 'Programador',
        salary: 3000,
        exp: 15,
        work: function(){
            console.log(person3.nombre +" esta trabajando")
        }
    }
}

console.log(person3)
person3.job.work()

//iteracion 
for (let key in person3){
    console.log(key+': '+person3[key])
}

//constructor
function Person(name,age,alias){
    this.name = name
    this.age = age
    this.alias = alias
    this.walk = function(){
        console.log(this.name+" esta caminando")
    }
}

let person4 = new Person('Santiago',22,'SV Code')
console.log(person4)
person4.walk()

