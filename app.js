// Empezamos poniendo los requerimientos
var express = require("express");
var app = express();

// Aniadimos la primera ruta
app.get("/", function(request, response) {
    // Para que la respuesta envie una pagina de HTML separada (embeeded javascript)
    response.render("home.ejs");
    
});



// Listener del puerto para iniciar 
app.listen(3000, function () {
    console.log("Servidor Iniciado")
});