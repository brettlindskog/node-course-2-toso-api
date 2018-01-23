const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    db.collection('Users').deleteMany({ name: 'Brett' }).then((result) => {
        console.log(result);
    });
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Somethign to do' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a67a12f81f5c605e411bb4b')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});