/*

https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=random&rnlimit=1

https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=search&utf8=1&srsearch=Albert%20Einstein


add &origin=* for CORS issues or set requestheader
*/

const URL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&utf8=1&srsearch=";
const randomURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=random&grnnamespace=0&prop=revisions&rvprop=content&grnlimit=1"
const resultBaseURL = "http://en.wikipedia.org/?curid=";
var searchResult = document.getElementById("searchResult");
var insertPosition = document.getElementById("searchResult").parentNode;

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
  
          //clear results
          searchResult.innerHTML = "";

        for(var i = 0; i <9; i++) {
        var jsonObj = JSON.parse(response);
        var snippet = jsonObj.query.search[i].snippet;
        var title = jsonObj.query.search[i].title;
        var pageId = jsonObj.query.search[i].pageid;
        resultURL = resultBaseURL + pageId;

      

        //add searchresults as li under UL

        var Li = document.createElement("li");
        Li.setAttribute("class","list-group-item");
        Li.innerHTML = "<a href=\"" + resultURL + "\"target=\"_blank\" class=\"text-success\">" + "<h4>" + title + "</h4>" + snippet + "</a>";
        searchResult.insertBefore(Li,searchResult.childNodes[0]);
        }


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
              //  return callback(request.responseText);
        
        } else {  }

    }

};

  request.open("GET", url,true);
  request.send();





}