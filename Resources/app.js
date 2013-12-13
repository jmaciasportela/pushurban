var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.tts = require("jp.isisredirect.tts");

var tts = require("jp.isisredirect.tts");

tts.addEventListener(Alloy.Globals.tts.TTS_INITOK, function() {
    Alloy.Globals.tts.speak("Arrancando motores...");
});

Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_UTTERANCE_COMPLETE, function(e) {
    "spoken Hello" == e.utteranceid && Alloy.Globals.tts.speak("world");
});

Alloy.Globals.tts.initTTS();

var urbanairport = require("urbanairport");

urbanairport.register({
    debug: true,
    sound: true,
    vibrate: true,
    badge: true,
    alert: true,
    showOnAppClick: true,
    compatibility: true,
    alias: "John",
    tags: "single",
    callback: function(e) {
        if ("error" === e.type) alert("Sorry, no push for you: " + e.error); else if ("success" === e.type) alert("Your token is: " + e.deviceToken); else if ("callback" === e.type) {
            alert(e.message);
            Alloy.Globals.tts.speak(e.message.toString());
        }
    }
});

Alloy.createController("index");