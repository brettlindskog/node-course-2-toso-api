const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo.js');
const { User } = require('./../../models/user.js');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [{
    _id: userOneID,
    email: 'test@example.com',
    password: 'firstuserpassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneID, access: 'auth' }, 'secretsalt').toString()
    }]
}, {
    _id: userTwoID,
    email: 'example@test.com',
    password: 'seconduserpassword'
}];

const todos = [{
    _id: new ObjectID(),
    text: 'first test todo'
}, {
    _id: new ObjectID(),
    text: 'second test todo',
    completed: true,
    completedAt: 777
}];
const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };