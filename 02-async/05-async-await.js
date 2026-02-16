//async await son dos palabras reservadas que se utilizan para trabajar con código asíncrono de una manera más sencilla y legible.
//async se utiliza para declarar una función asíncrona, lo que significa que la función puede contener código asíncrono y devolver una promesa.
//await se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. Solo se puede usar dentro de una función async.

//Ejemplo de uso de async y await:

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos(después de 2 segundos)");
        }, 2000);
    });
}

async function mostrarDatos() { //hay que declarar la función como async para poder usar await dentro de ella
    console.log("Obteniendo datos...");
    const datos = await obtenerDatos(); //await espera a que la promesa devuelta por obtenerDatos() se resuelva antes de asignar el valor a la variable datos
    console.log(datos);
}

mostrarDatos(); //llamamos a la función para ver el resultado
//Salida:
//Obteniendo datos...
//Datos obtenidos (después de 2 segundos)
