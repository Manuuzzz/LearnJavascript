/*

Example:
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541

Twitch documentation:
https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user

*/



        

        httpRequest(modifiedURL,function(response) {

        var isRandom = "no";
        displayResult(response,isRandom);   
         
        });
 
   




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
  request.send();

}

