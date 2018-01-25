const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a68c44f836341fc36069e41';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

//users id a68c44f836341fc36069e41
//user.findbyid
User.findById(id).then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));