// Empezamos poniendo los requerimientos
var express = require("express");
var app = express();

// Aniadimos la primera ruta
app.get("/", function(request, response) {
    response.send("VIVOOO bienvenido a HOME");
});

// Listener del puerto para iniciar 
app.listen(3000, function () {
    console.log("Servidor Iniciado")
});