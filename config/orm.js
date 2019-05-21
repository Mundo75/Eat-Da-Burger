
const connection = require("./connection");

let orm = {

    selectAll: function (tableName, callback) {

        connection.query("SELECT * FROM ??", [tableName], function (error, result) {

            if (error) {
                throw error;
            };

            callback(result);

        });

    },

    insertOne: function (tableName, objectToInsert, callback) {

        connection.query("INSERT INTO ?? SET ?", [tableName, objectToInsert], function (error, result) {

            if (error) {
                throw error;
            };

            callback(result);

        });

    },

    updateOne: function (tableName, itemToUpdate, condition, callback) {

        connection.query("UPDATE ?? SET ? WHERE ?", [tableName, itemToUpdate, condition], function (error, result) {

            if (error) {
                throw error;
            };
                
            callback(result);

        });

    }

};



module.exports = orm;