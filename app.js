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

// Definiendo las rutas de lista de posts
app.get("/posts", function(request, response){
    // Definimos un arreglo de posts
    var posts = [
        // Dentro del Arreglo un diccionario
        {titulo: "Post1", autor: "Gustavo"},
        {titulo: "My mascota adorable", autor: "Morco"},
        {titulo: "Puedes ver este puerquitooo", autor: "alguienXD"},
    ];

    // Definimos el rendereado de la pagina con ejs y las variables a pasars
    response.render("posts.ejs", {
        posteos: posts
    });

});


// Listener del puerto para iniciar 
app.listen(3000, function () {
    console.log("Servidor Iniciado");
});