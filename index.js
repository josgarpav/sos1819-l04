var cool = require("cool-ascii-faces");
var express = require("express");

var port = process.env.PORT || 8080;

var app = express();

app.get("/",(request, response) => {
    response.send(cool());
    console.log("New request received");
});

// Arrancamos el server
app.listen(port);


