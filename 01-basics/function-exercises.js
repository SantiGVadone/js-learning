// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b
}
console.log(suma(1,2))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
numeros=[ 1,3,4,5,2]
function mayor(array){
    let mayor = array[0]
    for(let value of array){
        if(value>mayor){
            mayor=value
        }
    }
    return mayor
}
console.log(mayor(numeros))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
cadena= "micadenadecaracteresconvocales"
function vocales(string){
    let vocales =0
    for (let value of string){
        if(value=='a'||value=='e'||value=='i'||value=='o'||value=='u'){
            vocales ++
    }
}
return vocales
}
console.log(vocales(cadena))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
nombres = ['santiago','gabriel','roberto']

function mayus(array){
let mayusculas = []
    for(let value of array){
        mayusculas.push(value.toUpperCase())
    }
return mayusculas
}
console.log(mayus(nombres))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primos (numero){
    if(numero<2){
        return false
    }
    for(let i=2;i<numero;i++){
        if(numero%i==0){
            return false
        }
    }
    return true
}
console.log(primos(8))
console.log(primos(7))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
array1= [1,2,3,4,5]
array2= [4,5,6,7,8]
function comunes(array1,array2){
    let comunes = []
    for(let value of array1){
        if(array2.includes(value)){
            comunes.push(value)
        }
    }
    return comunes
}
console.log(comunes(array1,array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
numeros= [2,2,2,2,2,1,3,5,7,9]
function pares(array){
    let suma = 0 
    for(let value of array){
        if(value%2==0){
            suma += value
        }
    }
    return suma
}
console.log(pares(numeros))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
numeros = [1,2,3,4,5]
function cuadrado(array){
    let resultados= []
    for(let value of array){
        resultados.push(value*value)
    }
    return resultados
}
console.log(cuadrado(numeros))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
cadenaText= "Estoy aprendiendo a programar en JavaScript"
function reversa(string){
    let palabras = string.split(' ')
    let reves = []
        for ( let words of palabras){
            reves.unshift(words)
        }
        return reves.join(' ')
}
console.log(reversa(cadenaText))
// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero){
    //vamos a hacer un funcion recursiva OSEA UNA FUNCION QUE SE LLAMA A SI MISMA
    if(numero==0){
        return 1
    }else{
        return numero * factorial(numero-1)
    }
}
console.log(factorial(5))
console.log(factorial(0))