//simulando obtener un user de la db 
//array de users 
const users = [
    {id:1, name: 'Santi'},
    {id:2, name: 'Pablo'},
    {id:3, name: 'Maria'}
]

//funcion que simula obtener un user de la db por id 
//dato clave si una funcion trabaja de forma asincrona, siempre debe retornar una promesa
function getUserById(id){
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

//obtener el user con id 2
getUserById(2)
    .then(user => console.log(user))
    .catch(err => console.log(err.message))
//obtener el user con id 5
getUserById(5)
    .then(user => console.log(user))
    .catch(err => console.log(err.message))
//obtener el user con id 'asd'
getUserById('asd')
    .then(user => console.log(user))
    .catch(err => console.log(err.message))

//ahora vamos a crear la funcion getPostByUserId
const posts = [
  { id: 1, userId: 1, title: "Mi primer post" },
  { id: 2, userId: 1, title: "Aprendiendo Promises" },
  { id: 3, userId: 2, title: "Node es god" }
];

function getPostByUserId(userId){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            //const p = posts.find( p => p.id === userId) no va el find porque el usuario puede tener mas de 1 post
            const p = posts.filter( p => p.userId === userId) //igualo los userId no los id
            if(p.length>0){
                resolve(p)
            }else{
                reject(new Error ('No se encontraron Posts para ese usuario'))
            }
        },1000)
    })
}


getUserById(1)
    .then(user => {
        console.log('El usuario: ', user.name)
        return getPostByUserId(user.id)
    })
    .then(posts => {
        posts.forEach(post => {
            console.log(post.title)            
        })
    })
    .catch(err => console.error(err.message))



getUserById('asd')
    .then(user => {
        console.log(user.name)
        return getPostByUserId(user.id)
    })
    .then(posts => {
        posts.forEach(post => {
            console.log(post.title)            
        })
    })
    .catch(err => console.error(err.message))