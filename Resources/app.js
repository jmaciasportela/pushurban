var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var urbanairport = require("urbanairport");

urbanairport.register({
    debug: true,
    sound: true,
    vibrate: true,
    badge: true,
    alert: true,
    autoBadge: false,
    compatibility: true,
    alias: "John",
    tags: "single",
    callback: function(e) {
        "error" === e.type ? alert("Sorry, no push for you: " + e.error) : "success" === e.type ? alert("Your token is: " + e.deviceToken) : "callback" === e.type && alert(e.message);
    }
});

urbanairport.showOnAppClick = true;

Alloy.createController("index");