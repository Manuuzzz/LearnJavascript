var tweet="";
var quote="";
var author="";
var url = "";
var quoteColor = ["quotegreen", "quoteblue", "quotered", "quotegrey"];
var tempColorNumber = 0;
var colorNumber = 0;

  function loadQuote() {
	var quoteColorArrayLength = quoteColor.length;

   

	while (colorNumber == tempColorNumber) {
	 colorNumber = Math.floor((Math.random()*quoteColorArrayLength));
	   
 }
 
 tempColorNumber = colorNumber;
 
 var className = "jumbotron " + quoteColor[colorNumber]
 
 document.getElementById("colorchange").setAttribute("class",className);

var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function()  {
    
    if(xhttp.readyState == 4){
                  //the request is completed, now check its status
                  if(xhttp.status == 200){
                
                var jsonObj = JSON.parse(xhttp.responseText);
				quote = JSON.stringify(jsonObj.quote);
				
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

xhttp.send();


        } //end function loadQuote



