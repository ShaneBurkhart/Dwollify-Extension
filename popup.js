jQuery(function(){

  chrome.runtime.sendMessage({junk: '', action: "popup"}, function(hi){});

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    if(request.action == "background"){
      if(request.emails){
        console.log(request.emails);
        for(var i = 0 ; i < request.emails.length ; i ++)
          $("#email-list").append(request.emails[i]);
      }
    }

  });

});

