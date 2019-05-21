//File for establishing the routes for the app 
const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function (request, response) {

    burger.getAll(function (data) {

        response.render("index", { burgers: data });

    });

});


router.post("/api/burgers", function (request, response) {

    burger.create(request.body, function (result) {

        response.json({ id: result.insertID });

    });

});



router.put("/api/burgers/:id", function (request, response) {

    burger.update({ devoured: request.body.devoured }, { id: request.body.id }, function (result) {

        if (result.changedRows == 0)

            return response.status(404).end();

        else

            response.status(200).end();

    });

});



module.exports = router;