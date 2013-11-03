$(function() {
  var emails = $("body").text().match(/([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))/g);

  emails = $.unique(emails).sort();

  chrome.runtime.sendMessage({"emails": emails, action: "background"}, function(response){});
});
