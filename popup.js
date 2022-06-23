document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded...")
  document.getElementById('save').addEventListener('click', save);
  function save() {
    // Save popup.html input
    console.log('Settings Saved!')
    var userId = document.getElementById('user-id').value;
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