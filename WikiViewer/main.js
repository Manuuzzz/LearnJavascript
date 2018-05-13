/*

https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=random&rnlimit=1

https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=search&utf8=1&srsearch=Albert%20Einstein


add &origin=* for CORS issues or set requestheader
*/

const URL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&utf8=1&srsearch=";
const randomURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=random&grnnamespace=0&prop=revisions&rvprop=content&grnlimit=1"


function init() {
var input = document.getElementById("searchString");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

}


function wikiSearch() {
 

  var searchString = document.getElementById("searchString").value;
  if(searchString == ""){
  return; } else {
  var modifiedURL = URL + searchString.replace(/\s/gi,"%20");

httpRequest(modifiedURL,function(response) {
  
    document.getElementById("showtest").innerHTML = response;
  });
 
}
}


function wikiRandom() {


httpRequest(randomURL,function(response) {

    document.getElementById("showtest").innerHTML = response;
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
  request.send();





}