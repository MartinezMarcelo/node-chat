const Model = require('./model');


function addUser(user){
    const myUser = new Model(user);
    myUser.save();
}

async function getUsers(filterName){
    
    return await  Model.find();
    
}

async function updateUser(id, name){ 
    const foundUser = await Model.findOne({
        _id: id
    });
    foundUser.name = name;
    const newUser = await foundUser.save();
}

async function removeUser(id){
    await Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addUser,
    list: getUsers,
    updateUser: updateUser,
    remove: removeUser
}