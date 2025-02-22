function greeting(name){
    console.log('Hola, '+name);
}

let users = ['Luis','Maria','José','Mateo','Priscila'];
for (let i=0; i<users.length; i++){
    greeting(users[i])
}