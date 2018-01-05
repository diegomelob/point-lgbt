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
        [],
        returns: {
            type: ["Cards"],
            root: true
        },
    });

    Cards.getCardsDetail = function (hashKey, cb) {
        var p = Processor(Cards);
        p.getCardsDetail(Cards, hashKey, cb)
        .then(function (data) { 
          return cb(null,data);
        })
        .catch(function (e) { 
          return cb(e); 
        });
      }

    Cards.remoteMethod("getCardsDetail", {
        isStatic: true,
        description: "Response cards detail",
        http: {
            verb: "get",
            path: "/get-cards-detail"
        },
        accepts:
        [
           {
                arg: "hashKey",
                type: "string",
                required: true,
                description: "Active card detail",
                root: true
            }
        ],
        returns: {
            type: ["CardsDetail"],
            root: true
        },
    });    

};