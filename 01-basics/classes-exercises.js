// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(name='Sin nombre', age='Sin edad'){
        this.name= name
        this.age =age
    }

    static run(){
        console.log(this.name, 'Esta corriendo')
    }
}
let person= new Persona("Juan", 30)
console.log(person)
// 2. Añade un método a la clase que utilice las propiedades
class PersonaWhitMethod {
    constructor(name, age){
        this.name= name
        this.age =age
    }

    saluda(){
        console.log('Hola soy '+this.name+' Tengo ' +this.age+ ' años' )
    }
}
let person1 = new PersonaWhitMethod('Pedro',40)
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(person1.name)
console.log(person1.age)
person1.saluda()
// 4. Añade un método estático a la primera clase
//listo en la linea 8..10
// 5. Haz uso del método estático
Persona.run()
// 6. Crea una clase que haga uso de herencia
class Deportista {
    constructor(name){
        this.name=name
    }
    saluda(){
        console.log('Hola me llamo ',this.name)
    }
}

class Nadador extends Deportista{
    nada (){
        console.log('Estoy nadando')
    }
}
let nadador= new Nadador('Santiago')
console.log(nadador.name)
nadador.saluda()
nadador.nada()

// 7. Crea una clase que haga uso de getters y setters
class Payment{
    #method
    #card
    constructor(method='Credito',card='1234 1234 1234 1234'){
        this.#card= card
        this.#method= method 
    }
    get metodo(){
        return this.#method
    }
    set card(newCard){
        this.#card= newCard
    }
}
let pago= new Payment('Debito','1234 1234 1234 1234')
console.log(pago)

console.log(pago.metodo)
pago.card= '7890 7890 7890 7890'
console.log(pago)
// 8. Modifica la clase con getters y setters para que use propiedades privadas
//ya esta echo
// 9. Utiliza los get y set y muestra sus valores
//ya esta echo

// 10. Sobrescribe un método de una clase que utilice herencia 
class Futbolista extends Nadador{
    constructor(name){
        super(name)
    }
    gol (){
        console.log(this.name,' Metio un goooool!!!')
    }
}
let messi= new Futbolista('Messi')
console.log(messi)
messi.gol()