var 
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan');


var server=app.listen(3000,function(){
  console.log("magic happens at port 3000");
})

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/client/'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/main.html');
});
