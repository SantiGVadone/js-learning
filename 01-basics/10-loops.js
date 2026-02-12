//loops o bucles for/ while /do while 

//for 
for (let i = 0; i <= 10; i++){
    console.log(i)
}
const numbers = [1,2,3,4,5]
for (let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i])
}

//while 
let i =0
while(i<=10){
    console.log(i)
    i++
}

//do while
do{
    console.log(i)
    i++
}while(i<=10)

//for of 
vector= [ 1,2,3,4]
set = new Set(['Santiago','Vadone','Argentina','Buenos Aires'])
map = new Map([
    ['name','santiago'],
    ['lastname','vadone'],
    ['age',22]
])

cadenaTexto= 'SantiagoVadone'

for (let valor of vector){
    console.log(valor)
}
for (let valor of set){
    console.log(valor)
}
for (let valor of map){
    console.log(valor)
}
for (let valor of cadenaTexto){
    console.log(valor)
}

//break y continue
for(let i=0;i<10;i++){
    if(i==5){//cuando i es = a 5 entonces se salta todo lo que hay le dice "Continua pero en la siguiente vuelta ya"
        continue
    }else if (i==8){
        break // para el bucle, lo termina
    }
    console.log(i)

}