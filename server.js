
//Declare dependencies, set up port (usable by Huroku), and set up express app with
//express-handlebars
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 7572;


let app = express();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require("./controllers/burgers_controller");

app.use(routes);



app.listen(PORT, function(){

    console.log("Server listening at localhost:" + PORT);

});