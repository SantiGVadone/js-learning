//CONSOLE
//CONSOLE methods 
//log
console.log("Hello World")

//error
console.error("This is an error message")

//warn
console.warn('This is a warning message')

//info
console.info('This is an informational message')

//table
let data= [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Doe', age: 35}
]

console.table(data)

//group 
console.group('User Details')
console.log('Name: John')
console.log('Age: 30')
console.groupEnd()

//time 

console.time('Timer')
for(let i=0; i<1000000; i++) {
    // some code to execute
}
console.timeEnd('Timer')

//assert
let age =17 
console.assert(age >= 18, 'Age must be at least 18')

//count
console.count('Clicks')
console.count('Clicks')
console.count('Clicks')
console.countReset('Clicks')
console.count('Clicks')

//trace
function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace('Seguimiento de la pila de las llamadas')
}
a()

//clear
console.clear()