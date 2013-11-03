$(function() {
  var emails = $("body").text().match(/\S+@\S+\.\S+/g);

  chrome.runtime.sendMessage({"emails": emails, action: "background"}, function(response){});
});
