
// freeCodeCamp Weather API endpoint: https://fcc-weather-api.glitch.me/api/current?lat=50.74&lon=3.62 
// https://openweathermap.org/forecast5
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

var weatherAPI_Endpoint = "https://fcc-weather-api.glitch.me/api/current?";
var lat = "";
var lon = "";



function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
       
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
 
}
function showPosition(position) {
 

    lat = round(position.coords.latitude, 2);
    lon = round(position.coords.longitude,2);



    weatherAPI_Endpoint = weatherAPI_Endpoint + "lat=" + lat + "&lon=" + lon;
    
    GetWeather();
   
}



function GetWeather() {
   

    var weather_xhttp = new XMLHttpRequest();
    
    weather_xhttp.onreadystatechange = function() {

        if(weather_xhttp.readyState == 4)
         {
             if (weather_xhttp.status == 200) {

            //response
          
                var jsonObj = JSON.parse(weather_xhttp.responseText);
               
               var description =jsonObj.weather[0].main;
               document.getElementById("showWeather").innerHTML = description;

               var tempe =jsonObj.main.temp;
               document.getElementById("showWeather").innerHTML = description + " " + tempe;

             }
             else {

                document.getElementById("showWeather").innerHTML = "The Weather API is not available. Try again later";
                 }
        }

    };
    
    weather_xhttp.open("GET", weatherAPI_Endpoint, true);
    weather_xhttp.send();

   

} // end function GetWeather



/* Round the latitude and longtitude to precision 2 */
function round(number, precision) {
    var shift = function (number, precision, reverseShift) {
      if (reverseShift) {
        precision = -precision;
      }  
      var numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
  }