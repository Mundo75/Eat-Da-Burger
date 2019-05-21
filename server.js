
//Declare dependencies, set up port (usable by Huroku), and set up express app with
//express-handlebars
const express = require("express");
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 7572;


let app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require("./controllers/burgers_controller");

app.use(routes);



app.listen(PORT, function(){

    console.log("Server listening at localhost:" + PORT);

});