var express = require('express');
var path = require('path')

var app = express();



app.use(express.static(__dirname + '/dist/restaurant'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
    '/dist/restaurant/index.html'));});

var server = app.listen(process.env.PORT ||8080, function () {
    // var host = server.address().address
    var port =process.env.PORT ||8080

    console.log("Example app listening at http://%s:%s", port)
})

// app.get("/*",(req,res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'));
// })