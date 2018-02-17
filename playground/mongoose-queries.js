const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5a885ee238e695be0300e24611';
//
// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos: ', todos);
// });
//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By ID: ', todo);
// }).catch((e) => console.log(e.message));

// findById: Challenge
let id = '5a88255aa849cab6f6efbb97';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('User: ', user);
}).catch((e) => console.log(e.message));