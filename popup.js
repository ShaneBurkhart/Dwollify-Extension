jQuery(function(){

  chrome.runtime.sendMessage({junk: '', action: "popup"}, function(hi){});

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    if(request.action == "background"){
      if(request.emails){
        console.log(request.emails);
        $("#email-list").text('');
        for(var i = 0 ; i < request.emails.length ; i ++)
          $("#email-list").append([
            '<li>',
              '<a href="#" class="email" data-email="', request.emails[i], '">',
                request.emails[i],
              '</a>',
            '</li>'
          ].join(""));
        $(".email").unbind();
        $(".email").bind("click", function(){
          var lots_of_underscores = $('#amount').val();
          var email = $(this).data("email");
          $.ajax({
              type: "POST",
              url: "http://dwollify.herokuapp.com/dwollify",
              data: JSON.stringify({
                "email" : email,
                "amount" : lots_of_underscores
              }),
              complete: function(data) {
                alert('You just tipped $' + lots_of_underscores + ' to ' + email + '!');
              }
          });
        });
      }
    }

  });

});

