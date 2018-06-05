/*
https://codepen.io/freeCodeCamp/full/Myvqmo/
Example:
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541

Twitch documentation:
https://dev.twitch.tv/get-started
https://dev.twitch.tv/docs/authentication/#introduction

New Documentation/API:
https://dev.twitch.tv/docs/api/

- use webhook to get the online/offline status of a user/stram/channel:
https://dev.twitch.tv/docs/api/webhooks-reference/#topic-stream-updown

todo: 
- one function for the http requests, put url's in array? for each ..


*/

//const BASEURL_TWITCH = "https://api.twitch.tv/helix/users?login=esl_sc2&client_id=1w7pucg8bnt8is11cs3pl42ng41879";
const BASEURL_TWITCH = "https://api.twitch.tv/helix/users?client_id=1w7pucg8bnt8is11cs3pl42ng41879&login=";
const WEBHOOKURL_TWITCH = "https://api.twitch.tv/helix/streams?user_id=";

var URL_ESL_SC2 = BASEURL_TWITCH + "esl_sc2";
var userId_ESL_SC2 = "";
var WEBHOOK_URL_ESL_SC2 = "";
        
function init() {
        
    
    httpRequest(URL_ESL_SC2,function(response) {

        var jsonObj = JSON.parse(response);
        userId_ESL_SC2 = jsonObj.data[0].id;
        WEBHOOK_URL_ESL_SC2 = WEBHOOKURL_TWITCH + userId_ESL_SC2;


            httpRequest(WEBHOOK_URL_ESL_SC2,function(response) {

                var jsonObj = JSON.parse(response);
           
               // alert(jsonObj.data[0].type);
    
             
            });

         
    });
 

    
   
}



function httpRequest(url,callback) {
   
 
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        
        if (request.readyState == 4 && request.status == 200) {
            if (typeof callback === "function") {
                
                            
                return callback(request.responseText);
           
        
        } else {  }

    }

};

  request.open("GET", url,true);
  request.setRequestHeader("Client-ID", "1w7pucg8bnt8is11cs3pl42ng41879");
  request.setRequestHeader("Authorization", "Bearer");

  request.send();

}
$( document ).click(function() {
    //$( "#toggle" ).toggle( "slide" , {direction:"right",distance:200}, testit());
            
           // $( "#toggle_esl_sc2" ).animate( {width: "toggle"}, "slow");
           $( "#toggle_esl_sc2" ).animate( {width: "toggle"}, "slow");
  });


function testit()   {


//$("#testertje").text("testertje");

}