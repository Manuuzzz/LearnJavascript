var tweet="";
var quote="";
var author="";
var randomQuoteCategoryArray = []; //declare array to fill with all categories from http://quotes.rest/qod/categories.json
var randomNumber ="";
var tempRandomNumber = 0;
var url = "";
var quoteColor = ["quotegreen", "quoteblue", "quotered", "quotegrey"];
var tempColorNumber = 0;
var colorNumber = 0;

  function loadQuote() {


var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function()  {
    
    if(xhttp.readyState == 4){
                  //the request is completed, now check its status
                  if(xhttp.status == 200){
                
                var jsonObj = JSON.parse(xhttp.responseText);
				quote = JSON.stringify(jsonObj.quote);
				
				//quote = JSON.stringify(jsonObj.contents.quotes[0].quote);
			   // author = jsonObj.contents.quotes[0].author;
			   author = jsonObj.author;
                tweet = "https://twitter.com/intent/tweet?text=" + quote + " Author: " + author;
                Velocity(document.getElementById("Quote"), { opacity: 0.0 }, { duration: 0 });
                document.getElementById("Quote").innerHTML = quote;

                
                Velocity(document.getElementById("Quote"), { opacity: 1 }, { duration: 700 });

                document.getElementById("Author").innerHTML = author;
                document.getElementById("tweetit").setAttribute("href",tweet);


                  }
                  else{
                      console.log("Status error: " + xhttp.status);
                  }
              }
              else{
                  console.log("Ignored readyState: " + xhttp.readyState);
              }
          
          
          }
		  xhttp.open("GET", "https://talaikis.com/api/quotes/random/", true);	  
//xhttp.open("GET", "http://quotes.rest/qod.json?category=sports", true);
xhttp.send();


// Get categories and add in array

xhttp_getCategories = new XMLHttpRequest();


xhttp_getCategories.onreadystatechange = function() {

	 if(xhttp_getCategories.readyState == 4){
				//the request is completed, now check its status
				if(xhttp_getCategories.status == 200){
   
			
			 json_getCategories = JSON.parse(xhttp_getCategories.responseText);
		
			for (var key in json_getCategories.contents.categories) {
									
					randomQuoteCategoryArray.push(key);
                   
					
			}
			
			var randomQuoteCategoryArrayLength = randomQuoteCategoryArray.length;
				}
				else{
					console.log("Status error: " + xhttp_getCategories.status);
				}
			}
			else{
				console.log("Ignored readyState: " + xhttp_getCategories.readyState);
			}
}

xhttp_getCategories.open("GET", "http://quotes.rest/qod/categories.json", true);
//xhttp_getCategories.setRequestHeader("method", "getQuote");
xhttp_getCategories.send();






        } //end function loadQuote







function changeQuote() {
    
    var quoteColorArrayLength = quoteColor.length;

   

   while (colorNumber == tempColorNumber) {
    colorNumber = Math.floor((Math.random()*quoteColorArrayLength));
      
}

tempColorNumber = colorNumber;

var className = "jumbotron " + quoteColor[colorNumber]

document.getElementById("colorchange").setAttribute("class",className);

	xhttp_changeQuote = new XMLHttpRequest();


xhttp_changeQuote.onreadystatechange = function() {
    

	 if(xhttp_changeQuote.readyState == 4){
				//the request is completed, now check its status
				if(xhttp_changeQuote.status == 200){

			
			 json_changequote2 = JSON.parse(xhttp_changeQuote.responseText);
			//var tweet2 = JSON.stringify(json_changequote2.contents.quotes[0].quote);
            
            document.getElementById("Quote").innerHTML = json_changequote2.contents.quotes[0].quote;
     
            //Velocity(document.getElementById("Quote"), { opacity: 0.0 });
           
         
            Velocity(document.getElementById("Quote"), { opacity: 1 }, { duration: 1000 });
           

            document.getElementById("Author").innerHTML = json_changequote2.contents.quotes[0].author;
		
		
				}
				else{
					console.log("Status error: " + xhttp_changeQuote.status);
				}
			}
			else{
				console.log("Ignored readyState: " + xhttp_changeQuote.readyState);
			}
}
var randomQuoteCategoryArrayLength = randomQuoteCategoryArray.length;

randomNumber = Math.floor((Math.random()*randomQuoteCategoryArrayLength)); // no + 1 as it is used in an Array

 while (randomNumber == tempRandomNumber) {
	 //alert(randomNumber + " + temp: " + tempRandomNumber);
    
	randomNumber = Math.floor((Math.random()*randomQuoteCategoryArrayLength));
}
tempRandomNumber = randomNumber;

 Velocity(document.getElementById("Quote"), { opacity: 0 }, { duration: 0 });
url = "http://quotes.rest/qod.json?category=" + randomQuoteCategoryArray[randomNumber];



xhttp_changeQuote.open("GET", url, true);


xhttp_changeQuote.send();





}

