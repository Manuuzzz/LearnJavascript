/*

Example:
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541

Twitch documentation:
https://dev.twitch.tv/get-started
https://dev.twitch.tv/docs/authentication/#introduction

New Documentation/API:
https://dev.twitch.tv/docs/api/

- use webhook to get the online/offline status of a user/stram/channel:
https://dev.twitch.tv/docs/api/webhooks-reference/#topic-stream-updown

*/

const BASEURL_TWITCH = "https://api.twitch.tv/helix/users?login=esl_sc2&client_id=1w7pucg8bnt8is11cs3pl42ng41879";


        
function init() {
        httpRequest(BASEURL_TWITCH,function(response) {

        var jsonObj = JSON.stringify(response);
        //var name = jsonObj.displayname;
        alert(jsonObj);
      //  document.getElementById("tester").innerHTML = name;
      //  displayResult(response);   
         
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

