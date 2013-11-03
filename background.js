console.log("Initializing background listener");


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    console.log("Loaded jquery");
    chrome.tabs.executeScript(null, {file: "libraries/jquery.js"}, function () {
      chrome.tabs.executeScript(null, {file: "content.js"});
    });
});

