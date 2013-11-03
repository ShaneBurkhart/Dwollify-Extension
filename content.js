var emails = $("body").text().match(/\S+@\S+\.\S+/);

console.log("Content.js");

chrome.runtime.sendMessage({emails: emails}, function(response){});
