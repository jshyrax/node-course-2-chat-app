const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users; 

    beforeEach(() => {
        users = new Users();
        users.users = [{
            'id': '1',
            'name': 'Mike',
            'room': 'Node Course'
        },
        {
            'id': '2',
            'name': 'Jen',
            'room': 'React Course'
        },
        {
            'id': '3',
            'name': 'Julie',
            'room': 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {id: 123, name:"cheesy", room:"woopie"};
        var response = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        var userId = '2';
        var removedUser = users.removeUser(userId);
        
        expect(removedUser).toBeAn('object');
        expect(removedUser.id).toBe(userId);
        expect(users.users).toNotContain(removedUser);
    });

    it('should not remove user', () => {    
        var removedUser = users.removeUser('123');
        
        expect(removedUser).toNotExist();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var userId = '3';
        var foundUser = users.getUser(userId);
        
        expect(foundUser).toBeAn('object');
        expect(foundUser.id).toBe(userId);
        expect(foundUser).toContainKeys(['id','name','room']);        

    });

    it('should not find user', () => {
        var foundUser = users.getUser('123');    

        expect(foundUser).toNotExist();        
    });
});