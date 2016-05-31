var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id:1,
	descripton: 'Meet mom for lunch',
	completed: false
},{
	id:2,
	descripton: 'Go to market',
	completed: false
},{
	id:3,
	descripton: 'Meet friend for lunch',
	completed: true
}];

app.get('/', function (req, res){
	res.send('TODO API Root');
});

// GET /todos
app.get('/todos', function (req, res){
	res.json(todos);
});

// GET /todos /:id
app.get('/todos/:id',function (req,res){
var todoId = parseInt(req.params.id,10);
var matchedTodoId;
todos.forEach(function (todo){
	if(todo.id === todoId){
		matchedTodoId = todo;
	}
});
if(matchedTodoId){
	res.json(matchedTodoId);
}else{
	res.status('404').send();
	}
});
 
 app.listen(PORT,function(){
 	console.log('Express listenining on Port :' + PORT + '!');
 });