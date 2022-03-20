function getAdmins (map){
    let admin = [];
    for([key, value] of map){
        if(value==='Admin'){
           admin.push(key); 
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set ('Robson','Admin');
usuarios.set ('Sophia','Admin');
usuarios.set ('João','User');
usuarios.set ('Natália','Admin');

console.log(getAdmins(usuarios));