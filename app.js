var express = require('express');
var app = express();

app.get('/', function(req, res){
	if(req.query.name == '' || req.query.name === undefined) {
		res.send('Hello World');
	} else {
  		res.send('Hello ' + req.query.name);
	}
});

app.listen(process.env.PORT || 8080);