/*
Explanation:
Search results:
https://www.mediawiki.org/wiki/API:Page_info_in_search_results

Extracts:
https://www.mediawiki.org/wiki/Extension:TextExtracts#API

add &origin=* for CORS issues

todo:
error when you don't have 8 results
https://codepen.io/icelandico/pen/vjegwb
*/

const URL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&generator=search&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
const randomURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=random&formatversion=2&exsentences=10&exlimit=1&exintro=1&explaintext=1&grnnamespace=0&grnlimit=1"
const resultBaseURL = "http://en.wikipedia.org/?curid=";
var searchResult = document.getElementById("searchResult");


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
    
    return; 
    
    } else {
    
        var modifiedURL = URL + searchString.replace(/\s/gi,"%20");
        

        httpRequest(modifiedURL,function(response) {

        var isRandom = "no";
        displayResult(response,isRandom);   
         
        });
 
    }
}



function wikiRandom() {

    httpRequest(randomURL,function(response) {

    
    var isRandom = "yes";

    displayResult(response,isRandom);
 
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


function displayResult(response,isRandom) {

 //clear results
 searchResult.innerHTML = "";

 if(isRandom == "no") {

    for(var i = 0; i <8; i++) {

    var jsonObj = JSON.parse(response);
    var snippet = jsonObj.query.pages[i].extract;
    var title = jsonObj.query.pages[i].title;
    var pageId = jsonObj.query.pages[i].pageid;
    resultURL = resultBaseURL + pageId;

    //add searchresults as li under UL

     var Li = document.createElement("li");
    Li.setAttribute("class","list-group-item");
    Li.innerHTML = "<a href=\"" + resultURL + "\"target=\"_blank\" class=\"results\">" + "<h4>" + title + "</h4>" + snippet + "</a>";
    searchResult.insertBefore(Li,searchResult.childNodes[i]);
    }

 } else {

    var jsonObj = JSON.parse(response);
    var snippet = jsonObj.query.pages[0].extract;
    var title = jsonObj.query.pages[0].title;
    var pageId = jsonObj.query.pages[0].pageid;
    resultURL = resultBaseURL + pageId;
   
    //add searchresults as li under UL
   
    var Li = document.createElement("li");
    Li.setAttribute("class","list-group-item");
    Li.innerHTML = "<a href=\"" + resultURL + "\"target=\"_blank\" class=\"results\">" + "<h4>" + title + "</h4>" + snippet + "</a>";
    searchResult.insertBefore(Li,searchResult.childNodes[0]);

 }

}

