var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

<<<<<<< HEAD
// GET /todos /:id
app.get('/todos/:id',function (req,res){
	var todoId = parseInt(req.params.id,10);
	var matchedTodoId = _.findWhere(todos, {id : todoId});
	if(matchedTodoId){
		res.json(matchedTodoId);
	}else{
		res.status('404').send();
		}
});

app.post('/todos',function (req,res){
	var body = _.pick(req.body,'completed','description');
	if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0){
		return res.status(400).send();
	}
	body.description = body.description.trim();
	body.id = todoNextId++;
=======
// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoId});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = _.pick(req.body, 'description', 'completed');

	if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
		return res.status(400).send();
	}

	body.description = body.description.trim();	
	body.id = todoNextId++;

>>>>>>> 341c639e6433a2cc60020c7796a9b9a671cd411d
	todos.push(body);
	
	res.json(body);
});

//delete /todos /:id
app.delete('/todos/:id',function (req,res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo = _.findWhere(todos, {id: todoId});
	
	if (!matchedTodo){
		res.status(404).json({"error" : "no todo found with that id"});
	} else {
		todos = _.without(todos,matchedTodo);
		res.json(matchedTodo);
	}
	


});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});




