//clases en js 
//son como las clases en c 
//es una especie de plantilla vacia 

class Person { //tiene que arrancar con mayus
    constructor(name, age, alias){
        this.name = name
        this.age = age 
        this.alias = alias
    }
}

//sintaxis

let person = new Person('Santiago',22,'Santi') // va con new porque estamos creando una nueva persona con la plantilla Person
console.log(person)

//valores por defecto
class DefaultPerson {
    constructor(name = 'Sin nombre', age=0, alias='Sin alias'){
        this.name= name
        this.age= age
        this.alias = alias
    }
}

let personaDefault= new DefaultPerson()
console.log(personaDefault)

//Acceso a propiedades 
console.log(person.name,person.age,person.alias)

// Funciones en las clases 
class PersonWithMethod { //tiene que arrancar con mayus
    constructor(name, age, alias){
        this.name = name
        this.age = age 
        this.alias = alias
    }
    walk(){
        console.log(this.alias + " esta caminando.")
    }
}
let person2 = new PersonWithMethod('Santi',22,'Cacha')
person2.walk()

//propiedades privadas
class PrivatePerson  {

    #bank //con el # lo que hago es decir que es privado

    constructor(name,age,alias,bank){
        this.name= name
        this.age= age 
        this.alias = alias 
        this.#bank = bank  //#esto es privado
    }
    pay(){
        console.log('La persona paga con: ',this.#bank)
    }
};

let person3 = new PrivatePerson('Santiago',22,'Santy','DATOS DEL BANCO');

console.log(person3);
person3.bank='NUEVOS DATOS DEL BANCO';// NO PUEDO MODIFICAR EL #BANK, ESTA LINEA LO QUE HACE ES CREAR UN BANK PUBLICO, NO REESCRIBE EL #BANK


console.log(person3);
person3.pay();

//getters y setters 

class GetSetPerson { //tiene que arrancar con mayus
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age 
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank= newBank
    }
}

let persona4= new GetSetPerson('Santiago',22,'Santy','Datos del Banco')

console.log(persona4.name) //no estoy accediendo realmente a la propiedad sino que estoy accediendo a la funcion get name() que me devuelve el return con el nombre

persona4.bank = 'Nuevos Datos del Banco' //ahora estoy accediendo a la funcion set bank(***) -> y esta cambia el dato

console.log(persona4)

//HERENCIA DE CLASES 
class Animal{
    constructor (name){
        this.name = name
    }

    sound(){
        console.log(this.name+' emite un sonido generico')
    }
}

class Dog extends Animal{

    sound(){
        console.log('El perro ladra')
    }

    run(){
        console.log('El '+ this.name +' esta corriendo')
    }
}

class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size= size 
    }

    swim(){
        console.log('El pez '+this.name+' nada')
    }
}

let perrito= new Dog('Firulais') //me lo pide porque es una herencia de la funcion animal
perrito.run()
perrito.sound() // lo hace porque es una herencia de la funcion animal

let pecesito = new Fish('Nemo','3cm')
pecesito.swim()
pecesito.sound()

//metodos estaticos

class MathOperations{

    static sum(a,b){
        return a+b
    }
}
//al ser static no hace falta estanciar la clase, puedo usarla directamente

console.log(MathOperations.sum(5,10))