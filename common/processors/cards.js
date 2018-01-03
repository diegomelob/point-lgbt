var Boom = require('boom');
const _ = require('underscore');
var util = require("util");

module.exports = function conductor(Cards) {

    var self = {}; //Make a self reference 

    self.getCards = function() {

        return new Promise(function (resolve) {
            var ret = "1";

            if(ret != "")
            {
                var data = "Hello World";
                return resolve(data);
            }
        });
    }

    return self;
};