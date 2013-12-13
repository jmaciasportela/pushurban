// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};



/*
// Manually disable/re-enable push
urbanairport.disable(); // enable();

// Append tags instead of resetting them
urbanairport.addTags('foo'); // Both single and Array supported

// Remove one or more tags
urbanairport.removeTags(['foo','bar']); // Both single and Array supported
*/

/*

var tts = Alloy.Globals.tts = require("jp.isisredirect.tts"); 

var engines = tts.getEngines();

Ti.API.debug('PUSHURBAN- TTS - Engines: ' + JSON.stringify(engines));

// step 2 send checkTTS message to obtain voice list by package name of TTS Engine asynchronously
//tts.checkTTS("com.google.android.tts");

var initTTS = tts.initTTS ("com.google.android.tts");

// step 4 receive TTS_INITOK event that means TTS Engine is initialized ready to speak.
tts.addEventListener(tts.TTS_INITOK, function(e) {	
	Ti.API.debug('PUSHURBAN- TTS - INIT: ' + initTTS);	
	Ti.API.debug("tts engine is initialized: " + JSON.stringify(e));
});

tts.checkTTS("com.google.android.tts");

tts.setLanguage("es");
var language = tts.getLanguage();

Ti.API.debug('PUSHURBAN- TTS - Language: ' + tts.getLanguage().toString());

tts.speak("Hello", "spoken Hello");


*/


Alloy.Globals.tts = require("jp.isisredirect.tts");

var tts = require("jp.isisredirect.tts");
tts.addEventListener(Alloy.Globals.tts.TTS_INITOK, function(e) {
    Alloy.Globals.tts.speak("Arrancando motores...");
});

Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_UTTERANCE_COMPLETE, function(e) {
    if (e.utteranceid == "spoken Hello") {
        Alloy.Globals.tts.speak("world");
    }
});
Alloy.Globals.tts.initTTS();


var urbanairport = require('urbanairport');

urbanairport.register({
  debug: true, // Show debug info

  // Sets push types
  sound: true,   // iOS + Android (default)
  vibrate: true, // Android (default)
  badge: true,   // iOS (default)
  alert: true,   // iOS (default)

  // Use any native property or single-property method of the modules
  showOnAppClick: true,

  // Enable compatibility-mode (see blog)
  compatibility: true,

  // On Android these will be automatically set once UA is flying
  alias: 'John',
  tags: 'single', // Supports both a single or Array of strings!

  callback: function(e) { // The only callback you need

    // Registration failed
    if (e.type === 'error') {
      alert('Sorry, no push for you: ' + e.error);

    // Registration done
    } else if (e.type === 'success') {
      alert('Your token is: ' + e.deviceToken);

    // Received notification
    } else if (e.type === 'callback') {

      // Properties are normalized for iOS and Android:
      // e.payload === e.data === e.data.aps
      // e.message === e.data.alert === e.data.aps.alert
      alert(e.message);
      Alloy.Globals.tts.speak(e.message.toString());
      //Alloy.Globals.tts.speak(e.message);
    }
  }
});

