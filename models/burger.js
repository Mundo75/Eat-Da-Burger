//Call on reusable CRUD functions in ORM file dynamically change the database

const orm = require("../config/orm");

let burger = {

    getAll: function (callback) {

        orm.selectAll("burgers", function (result) {

            callback(result);

        });

    },

    create: function (newBurger, callback) {

        orm.insertOne("burgers", newBurger, function (result) {

            callback(result);

        });

    },

    update: function (updateObject, conditionObject, callback) {

        orm.updateOne("burgers", updateObject, conditionObject, function (result) {

            callback(result);

        });

    }

};