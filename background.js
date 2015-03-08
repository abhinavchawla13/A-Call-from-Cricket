chrome.browserAction.onClicked.addListener(function(){
  var newURL = chrome.extension.getURL("bg.html");
  chrome.tabs.create({ url: newURL }, function(tab){
  });
});
