var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
  res.json({message: "Welcome to the API for Lyt."});
});

app.use('/api', router);

app.listen(port);
console.log("Working on PORT: " + port);
