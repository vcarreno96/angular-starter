var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000,process.env.IP, function(){
       console.log('Angular starter listening on port:%s', 3000);        
});