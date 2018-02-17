const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '5a88af2b92abf141ba2c4a6d'}).then((todo) => {
	console.log(todo); 
});

// Todo.findByIdAndRemove('5a88af2b92abf141ba2c4a6d').then((todo) => {
// 	console.log(todo);
// });
