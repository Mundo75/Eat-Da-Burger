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

    update: function (update, condition, callback) {
        orm.updateOne("burgers", update, condition, function (result) {

            callback(result);

        });

    }

};
module.exports = burger;