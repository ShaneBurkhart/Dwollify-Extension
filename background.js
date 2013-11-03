console.log("Initializing background listener");


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

  if(request.action == "popup"){
    chrome.tabs.executeScript(null, {file: "libraries/jquery.js"}, function () {
      chrome.tabs.executeScript(null, {file: "content.js"});
    });
  }
});

