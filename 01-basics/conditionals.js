/*
condicionales 
tenemos:
IF
ELSE
SWITCH
*/


let edad = 0
if(edad>=18){
    console.log('Mayor de edad')
}else if(edad == 0){
    console.log('EDAD NO VALIDA')
}else{
    console.log('Menor de edad')
}


//TENEMOS EL IF PERO SIN TANTO QUILOMBO

edad>=18 ? console.log('Mayor de edad') : console.log('Menor de edad')

//CONDICION ? RESULTADO VERDADERO       : RESULTADO FALSO

//SWITCH

let day = 0 //-> lunes

switch(day){
    case 0:
        console.log('Lunes')
        break
    case 1:
        console.log('Martes')
        break
    case 2:
        console.log('Miercoles')
        break
    case 3:
        console.log('Jueves')
        break
    case 4:
        console.log('Viernes')
        break
    case 5:
        console.log('Sabado')
        break
    case 6:
        console.log('Domingo')
        break
    default:
        console.log('Dia no valido')
}