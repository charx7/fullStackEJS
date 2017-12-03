// Empezamos poniendo los requerimientos
var express = require("express");
var app = express();

// Aniadimos la primera ruta
app.get("/", function(request, response) {
    // Para que la respuesta envie una pagina de HTML separada (embeeded javascript)
    response.render("home.ejs");

});

// Otra ruta para sacar elementos desplegados dependiendo de routing
app.get("/enamorarse/:puerquito", function(request, response){
    // Salva lo de la ruta en una variable
    var despliegue = request.params.puerquito;
    // Renderear el archivo
    response.render("love.ejs", {desplegar: despliegue});
});


// Listener del puerto para iniciar 
app.listen(3000, function () {
    console.log("Servidor Iniciado");
});