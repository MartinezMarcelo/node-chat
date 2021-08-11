const store = require('./store');

function addUser(name){
    return new Promise((resolve, reject) =>{
        if(!name) {
            return Promise.reject('invalid name')
        }

        const user = {
            name
        }

        store.add(user);

        resolve(user);
    });
}

function getUsers(){
    return new Promise((resolve, reject)=>{
        resolve(store.list());
    });
}


module.exports = {
    addUser,
    getUsers
};
