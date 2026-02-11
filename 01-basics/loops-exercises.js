// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++){
    console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let i = 1
let suma = 0
while (i<=100){
    suma += i
    console.log(suma)
    i++
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++){
    if (!(i % 2)){
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
nombres= ['Santiago','Barbara','Roberto','Gabriel','Juan']

for(let value of nombres){
    console.log(value)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
cadenaTexto= 'pppppppppppappppppppapppppppppa'
let vocales =0
for(let value of cadenaTexto){
    if(value=='a'||value=='e'||value=='i'||value=='o'||value=='u'){
        vocales ++
    }
}
console.log(vocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
numeros= [1,2,3,4,5]
let producto = 1
for(let value of numeros){
    producto *= value
}
console.log(producto)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i=0;i<=10;i++){
    console.log("5 x " + i  + " = " + i*5)
}
// 8. Usa un bucle para invertir una cadena de texto
cadena= 'Santiago'
for(let i=cadena.length-1;i>=0;i--){
    console.log(cadena[i])
}
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a=0
let b=1
for (let i=0;i<10;i++){
    console.log(a)
    let c=a+b
    a=b
    b=c
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let mayores = []
for(let value of numbers){
    if(value>10){
        mayores.push(value)
    }
}
console.log(mayores)