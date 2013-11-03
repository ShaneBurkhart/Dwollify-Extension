var emails = $("body").text().match(/\S+@\S+\.\S+/);

chrome.runtime.sendMessage({"emails": emails, action: "background"}, function(response){});
