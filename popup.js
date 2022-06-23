document.addEventListener('load', function() {
  document.getElementById('save').addEventListener('click', save);
  // grab local settings from popup.html
  // chrome.storage.local.get(null,function(storage) {
  //   // console.debug("clientId = " + storage.clientId);
  //   // document.getElementById('sdk-key').value = storage.clientKey;

  //   // // console.debug("userKey = " + storage.userID);
  //   // document.getElementById('userId').value = storage.userKey;

  //   // // console.debug("flagKey = " + storage.flagKey);
  //   // document.getElementById('feature').value = storage.feature;

  //   // // console.debug("enabled = " + storage.enabled);
  //   // document.getElementById('extension').checked = storage.extension;

  //   // document.getElementById('object').value = storage.objectId;

  // });
  function save() {
    // Save popup.html input
    var userId = document.getElementById('userId').value;
    chrome.storage.local.set({'userId': userId}, function() {
      console.log("Settings saved. UserID = " + userId);
    });
    var clientKey = document.getElementById('sdk-key').value;
    chrome.storage.local.set({'clientKey': clientKey}, function() {
      console.log("Settings saved. clientKey = " + clientKey);
    });
    var feature = document.getElementById('feature').value;
    chrome.storage.local.set({'feature': feature}, function() {
      console.log("Settings saved. Split feature = " + feature);
    });
    var extension = document.getElementById('extension').checked;
    chrome.storage.local.set({'extension': extension}, function() {
      console.log("Settings saved. extension enabled = " + extension);
    });
    var object = document.getElementById('object').value;
    chrome.storage.local.set({'object': object}, function() {
      console.log("Settings saved. Object ID = " + object);
    });    
  }
}, false);