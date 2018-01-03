const Processor = require('../processors/cards');

module.exports = function(Cards) {

    Cards.getCards = function (cb) {
        var p = Processor(Cards);
        p.getCards()
        .then(function (data) { 
          return cb(null,data);
        })
        .catch(function (e) { 
          return cb(e); 
        });
      }

    Cards.remoteMethod("getCards", {
        isStatic: true,
        description: "Response cards",
        http: {
            verb: "get",
            path: "/get-cards"
        },
        accepts:
        [
           /* {
                arg: "card",
                type: "string",
                required: true,
                description: "Active Card",
                root: true
              }*/
        ],
        returns: {
            arg: "String",
            type: "String",
            root: true
        },
    });

};