
//vamos a realizar los ejercicios de promises utilizando async y await:

//Ejercicio 1 Crear una funcion que devuelva los datos de un usuario por su ID utilizando async y await.

const users = [
    {id:1, name: 'Santi'},
    {id:2, name: 'Pablo'},
    {id:3, name: 'Maria'}
]

const posts = [
  { id: 1, userId: 1, title: "Mi primer post" },
  { id: 2, userId: 1, title: "Aprendiendo Promises" },
  { id: 3, userId: 2, title: "Node es god" }
];

function getUserById(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const u = users.find(u => u.id === id) 
            if(u){
                resolve(u)
            } else {
                reject(new Error(`No existe el usuario con id ${id}`))
            }
        },1000)
    })
}

function getPostByUserId(userId){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const p = posts.filter( p => p.userId === userId)
            if(p.length>0){
                resolve(p)
            }else{
                reject(new Error ('No se encontraron Posts para ese usuario'))
            }
        },1000)
    })
}

async function mostrarUserYPosts(id) { //declaro que la funcion es async para poder usar el await dentro
    try {
        const user = await getUserById(id); //uso el await porque es una tarea que va a tardar un tiempo en resolverse, entonces quiero esperar a que se resuelva antes de continuar con la ejecución del código
        console.log('El usuario: ', user.name);
        const posts = await getPostByUserId(user.id);
        posts.forEach(post => {
            console.log('Post: ', post.title);
        });

    } catch (error) {
        console.log(error.message);
    }
}

mostrarUserYPosts(1); //llamamos a la función para ver el resultado
//Salida:
//El usuario:  Santi
//Post: Mi primer post
//Post: Aprendiendo Promises

mostrarUserYPosts(5); //llamamos a la función para ver el resultado
//Salida:
//No existe el usuario con id 5