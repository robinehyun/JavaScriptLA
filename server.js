var express = require('express');

var app = express();

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res){
  console.log(req);
  res.send('Server is running');
});

app.listen(3000, function(){
  console.log('JS is running!');
});
