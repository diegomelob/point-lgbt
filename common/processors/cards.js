var Boom = require('boom');
const _ = require('underscore');
var util = require("util");

module.exports = function conductor(Cards) {

    var self = {}; //Make a self reference 

    self.getCards = function () {

        return new Promise(function (resolve) {
            var ret = "1";

            if (ret != "") {
                var data = "Hello World";
                return resolve(data);;
            }
        });
    },

    self.getCardsDetail = function (Cards, hashKey, cb) {

        return new Promise(function (resolve, reject) {
            
            try {
                var teste = Cards.app.models.CardsDetail;

                teste.find(function (err, data) {
                    if (err) {
                        return reject(Boom.badImplementation("Error on query cards detail").output.payload);
                    } else {
                        return resolve(data);
                    }

                });
            }
            catch (err) {
                console.log(err);
                return resolve(data);
            }
        });
    }

    return self;
};