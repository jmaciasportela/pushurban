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



var urbanairport = require('urbanairport');
 
urbanairport.register({
  debug: true, // Show debug info 
  // Sets push types
  sound: true,   // iOS + Android (default)
  vibrate: true, // Android (default)
  badge: true,   // iOS (default)
  alert: true,   // iOS (default) 
  // Set any property and call any single-property method of the extended module
  autoBadge: false, 
  // Enable compatibility mode (see below)
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
    }
  }
});
 
// Manually disable/re-enable push
// urbanairport.enable(); // disable();
 
// Append tags instead of resetting them
urbanairport.addTags('foo'); // Both single and Array supported
 
// Set any property and call any single-property method of the extended module
urbanairport.showOnAppClick = true;