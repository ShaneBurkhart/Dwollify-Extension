console.log("Initializing background listener");

chrome.browserAction.onClicked.addListener(function(activeTab) {

    console.log("Loaded jquery");
    chrome.tabs.executeScript(null, {file: "libraries/jquery.js"}, function () {
      chrome.tabs.executeScript(null, {file: "content.js"});
    });
});

