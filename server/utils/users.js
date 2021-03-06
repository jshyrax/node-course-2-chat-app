//  addUser(id, name, room)
//  removeUser(id)
//  getUser(id)
//  getUserList(room)

class Users {
    constructor (){
        this.users = [];
    }

    addUser (id, name, room){
        var users = this.users;
        if (users.filter((user) => user.name.toLowerCase() === name.toLowerCase()).length > 0 ){
            return;
        }
        var user = {id, name, room};        
        this.users.push(user);
        return user;
    }

    removeUser(id){
        var removedUser;
        this.users = this.users.filter((user) => {
            if (user.id !== id){                
                return true;
            }
            removedUser = user;
            return false;
        });
        return removedUser;
    }

    getUser(id){
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};