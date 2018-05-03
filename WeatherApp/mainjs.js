
// freeCodeCamp Weather API endpoint: https://fcc-weather-api.glitch.me/api/current?lat=50.74&lon=3.62 
// https://openweathermap.org/forecast5
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//var weatherAPI_Endpoint = "https://fcc-weather-api.glitch.me/api/current?";

/*
How to get icon URL
For code 501 - moderate rain icon = "10d" 
URL is
http://openweathermap.org/img/w/10d.png

*/




var weatherAPI_Endpoint = "http://api.openweathermap.org/data/2.5/weather?"
var weatherAPI_Forecast_Endpoint = "http://api.openweathermap.org/data/2.5/forecast?"
var lat = "";
var lon = "";
var API_key = "&APPID=fe8927ebae20aa63891f33970a2edfb1";

function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
       
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
 
}
function showPosition(position) {
 
    lat = position.coords.latitude;
    lon = position.coords.longitude;


    weatherAPI_Endpoint = weatherAPI_Endpoint + "lat=" + lat + "&lon=" + lon + API_key;
    weatherAPI_Forecast_Endpoint = weatherAPI_Forecast_Endpoint +"lat=" + lat + "&lon=" + lon + API_key;
    

    GetWeather();
    GetForecast();
   
}



function GetWeather() {
   

    var weather_xhttp = new XMLHttpRequest();
    
    weather_xhttp.onreadystatechange = function() {

        if(weather_xhttp.readyState == 4)
         {
             if (weather_xhttp.status == 200) {

 
                var jsonObj = JSON.parse(weather_xhttp.responseText);
             
                var iconID = jsonObj.weather[0].icon;
                var temperature_Kelvin = jsonObj.main.temp;
                var temperature_Celsius = toCelsius(temperature_Kelvin);
                var temperature_Fahrenheit = toFahrenheit(temperature_Kelvin);
                var img = '<img width="200" height="200" src="weatherimg/' + iconID+".svg" + '">';
                var name = jsonObj.name;

                document.getElementById("showWeather").innerHTML = "<br>" + name + "<br>" + temperature_Celsius + "<br>" + img;
          

             }
             else {

                document.getElementById("showWeather").innerHTML = "The Weather API is not available. Try again later";
                 }
        }

    };
    
    weather_xhttp.open("GET", weatherAPI_Endpoint, true);
    weather_xhttp.send();

   

} // end function GetWeather

function GetForecast() {

var weatherForecast_xhttp = new XMLHttpRequest();

weatherForecast_xhttp.onreadystatechange = function() {

if (weatherForecast_xhttp.readyState == 4 ) {

    if (weatherForecast_xhttp.status == 200 ) {

        var d = new Date();
        var n = d.getDay();
        
        var jsonObj = JSON.parse(weatherForecast_xhttp.responseText);
         
         var tomorrow = jsonObj.list[1].weather[0].description;
         var todayplus2 = jsonObj.list[2].weather[0].description;
         var todayplus3= jsonObj.list[3].weather[0].description;
         var todayplus4= jsonObj.list[4].weather[0].description;

         var iconID_Tomorrow = jsonObj.list[1].weather[0].icon;  
         var iconID_todayplus2 = jsonObj.list[2].weather[0].icon; 
         var iconID_todayplus3 = jsonObj.list[3].weather[0].icon; 
         var iconID_todayplus4 = jsonObj.list[4].weather[0].icon; 

         var img_Tomorrow = '<img width="100" height="100" src="weatherimg/' + iconID_Tomorrow+".svg" + '">';
         var img_todayplus2 = '<img width="100" height="100" src="weatherimg/' + iconID_todayplus2+".svg" + '">';
         var img_todayplus3 = '<img width="100" height="100" src="weatherimg/' + iconID_todayplus3+".svg" + '">';
         var img_todayplus4 = '<img width="100" height="100" src="weatherimg/' + iconID_todayplus4+".svg" + '">';

         var temperatureKelvin_Tomorrow = jsonObj.list[1].main.temp;
         var temperatureKelvin_todayplus2 = jsonObj.list[2].main.temp;
         var temperatureKelvin_todayplus3 = jsonObj.list[3].main.temp;
         var temperatureKelvin_todayplus4 = jsonObj.list[4].main.temp;



         var c=document.getElementById("showWind");
         c.width = 55;
         c.height= 55;
         var ctx=c.getContext("2d");
         var img=document.getElementById("rotateWind");
        img.width = 50;
        img.height=50;
        ctx.rotate(40*Math.PI/180);
        ctx.drawImage(img,13,-22,50,50); //x, y, width, height



      
document.getElementById("showForecast").innerHTML = "Tomorrow<br>" +tomorrow+ "<br>"+ img_Tomorrow+ "<br>" + "Todayplus2<br>" +todayplus2+ "<br>" +  img_todayplus2+"<br>"+ "Todayplus3<br>" +todayplus3+ "<br>"+  img_todayplus3+"<br>" + "Todayplus4<br>" +todayplus4 + "<br>" +  img_todayplus4+"<br>";
    }
    else {

        document.getElementById("showWeather").innerHTML = "The Weather API is not available. Try again later";
         }

}



};

weatherForecast_xhttp.open("GET", weatherAPI_Forecast_Endpoint, true);
weatherForecast_xhttp.send();

} // end function GetForecast

function toCelsius(temperature_Kelvin) {
  
    // Kelvin to Celsius:  T(K) - 273.15

   var temperature = temperature_Kelvin- 273.15;
   return Math.round(temperature);
 

}

function toFahrenheit(temperature_Kelvin) {
  // Kelvin to Fahrenheit  9/5(K - 273) + 32

  var temperature = ((9/5)* temperature_Kelvin)  +32;
   return Math.round(temperature);
}
