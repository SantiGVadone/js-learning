//APi : Aplication Programming Interface

// -APIs REST (HTTP + URLs + JSON)

//Metodos HTTP
//GET : Obtener datos
//POST : Crear datos
//PUT : Actualizar datos
//PATCH : Actualizar parcialmente datos
//DELETE : Eliminar datos

//Codigos de respuestas HTTP:
//200 : OK
//201 : Created
//400 : Bad Request
//404 : Not Found
//500 : Internal Server Error

//Consumir una API con fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

//Consumir una API con async/await
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        for (const user of data) {
            console.log(`Nombre: ${user.name}, Username: ${user.username},Email: ${user.email}`);
        }
    } catch (error) {
        console.error(error);
    }
}
fetchUsers();

//Hacer una solicitud POST con fetch
async function createPost(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                title : 'Nuevo Post',
                body : 'Contenido del nuevo post',
                userId : 1
            })
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

createPost();