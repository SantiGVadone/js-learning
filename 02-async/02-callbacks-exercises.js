// //1 realizar la funcion getuserbyid 
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const getUserById = (id, callback) => {
    setTimeout(()=>{
        const user = users.find(u  => u.id===id)
        if (user){
            callback(null, user)
        }else {
            callback( new Error (`User with id ${id} not exists`), null)
        }
    },1500)
}

// getUserById(2, (error, user) => {
//     if (error){
//         console.error(error.message);
//     }else {
//         console.log(`User found: ${user.name}`);
//     }
// })

// getUserById(15, (error, user) => {
//     if (error){
//         console.error(error.message);
//     }else {
//         console.log(`User found: ${user.name}`);
//     }
// })

// //ej 2 realizar la funcion getPostById
const data = [
  { id: 1, title: 'Mi primer post' },
  { id: 2, title: 'Aprendiendo callbacks' }
]

const getPostById = (userId, callback) => {
    setTimeout(()=>{
        const post = data.find(p=> p.id === userId)
        if(post){
            callback(null, post)
        }else{
            callback( new Error(`No se encontraron posts para ese ID`), null)
        }
    },2000)
}

// getPostById (2 , (error, post) => {
//     if(error) {
//         console.error(error.message)
//     }else{
//         console.log(post)
//     }
// })

// getPostById(5, (error,post)=>{
//     if(error){
//         console.error(error.message)
//     }else{
//         console.log(post)
//     }
// })

//ej 3 realizar un callback hell con getUserById y con getPostById

getUserById(2, (error, user)=>{
    if(error){
        console.error(error.message)
    }else{
        console.log(user)
        getPostById(1,(error,post)=>{
            if (error){
                console.error(error.message)
            }else{
                console.log(post)
            }
        })
    }
})