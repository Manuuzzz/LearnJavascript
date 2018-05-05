
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


var days = [];
var date = new Date();
var d = date.getDay();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var weatherAPI_Endpoint = "https://api.openweathermap.org/data/2.5/weather?"
var weatherAPI_Forecast_Endpoint = "https://api.openweathermap.org/data/2.5/forecast?"
var lat = "";
var lon = "";
var API_key = "&APPID=fe8927ebae20aa63891f33970a2edfb1";
var toggleTemp = "Celsius";
var temperature_Celsius = 0;
var temperature_Fahrenheit =0;
var temperatureKelvin_Tomorrow = 0;
var temperatureKelvin_todayplus2 = 0;
 var temperatureKelvin_todayplus3 = 0;
var temperatureKelvin_todayplus4 = 0;
var iconID_Tomorrow = "";  
var iconID_todayplus2 = ""; 
var iconID_todayplus3 = ""; 
var iconID_todayplus4 = ""; 

var img_Tomorrow = "";
var img_todayplus2 = "";
var img_todayplus3 = "";
var img_todayplus4 = "";

var windSpeed_Tomorrow = "";
var windDegrees_Tomorrow = "";
var windSpeed_todayplus2 = "";
var windDegrees_todayplus2 ="";
var windSpeed_todayplus3 = "";
var windDegrees_todayplus3 = "";
var windSpeed_todayplus4 = "";
var windDegrees_todayplus4 = "";


var windDirection_Tomorrow = "";
var windDirection_todayplus2 = "";
var windDirection_todayplus3 = "";
var windDirection_todayplus4 = "";


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
                temperature_Celsius = toCelsius(temperature_Kelvin);
                temperature_Fahrenheit = toFahrenheit(temperature_Kelvin);
                var img = '<img class="img_weather" width="70" height="70" src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/' + iconID+".svg" + '">';
                var name = jsonObj.name;
                var windSpeed = jsonObj.wind.speed;
                var windDegrees = jsonObj.wind.deg;
                var windDirection = checkWindDirection(windDegrees);
           
                document.getElementById("location").innerHTML = name;
                document.getElementById("showWeather").innerHTML = img;
                document.getElementById("showTemp").innerHTML = temperature_Celsius + '&#8451';
                document.getElementById("windContainer").innerHTML = 'Wind:<br>' + Math.floor((windSpeed*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection;
                
                

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

        

        day0 = days[d];
        
        getDays(d);
     
                
        var jsonObj = JSON.parse(weatherForecast_xhttp.responseText);
         
               

         iconID_Tomorrow = jsonObj.list[1].weather[0].icon;  
          iconID_todayplus2 = jsonObj.list[2].weather[0].icon; 
          iconID_todayplus3 = jsonObj.list[3].weather[0].icon; 
          iconID_todayplus4 = jsonObj.list[4].weather[0].icon; 

          img_Tomorrow = '<img width="30" height="30" src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/' + iconID_Tomorrow+".svg" + '">';
 img_todayplus2 = '<img width="30" height="30" src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/' + iconID_todayplus2+".svg" + '">';
          img_todayplus3 = '<img width="30" height="30" src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/' + iconID_todayplus3+".svg" + '">';
          img_todayplus4 = '<img width="30" height="30" src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/' + iconID_todayplus4+".svg" + '">';

          temperatureKelvin_Tomorrow = jsonObj.list[1].main.temp;
          temperatureKelvin_todayplus2 = jsonObj.list[2].main.temp;
          temperatureKelvin_todayplus3 = jsonObj.list[3].main.temp;
          temperatureKelvin_todayplus4 = jsonObj.list[4].main.temp;



          windSpeed_Tomorrow = jsonObj.list[1].wind.speed;
          windDegrees_Tomorrow = jsonObj.list[1].wind.deg;
 windSpeed_todayplus2 = jsonObj.list[2].wind.speed;
          windDegrees_todayplus2 = jsonObj.list[2].wind.deg;
          windSpeed_todayplus3 = jsonObj.list[3].wind.speed;
          windDegrees_todayplus3 = jsonObj.list[3].wind.deg;
          windSpeed_todayplus4 = jsonObj.list[4].wind.speed;
          windDegrees_todayplus4 = jsonObj.list[4].wind.deg;


          windDirection_Tomorrow = checkWindDirection(windDegrees_Tomorrow);
          windDirection_todayplus2 = checkWindDirection(windDegrees_todayplus2);
          windDirection_todayplus3 = checkWindDirection(windDegrees_todayplus3);
          windDirection_todayplus4 = checkWindDirection(windDegrees_todayplus4);


      
document.getElementById("showForecast1").innerHTML = weekdays[days[1]] + '<br>' + img_Tomorrow + '<br>'+ toCelsius(temperatureKelvin_Tomorrow)+ '<br>'+Math.floor((windSpeed_Tomorrow*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_Tomorrow;
document.getElementById("showForecast2").innerHTML = weekdays[days[2]]+ '<br>' + img_todayplus2 + '<br>' +  toCelsius(temperatureKelvin_todayplus2)+'<br>'+Math.floor((windSpeed_todayplus2*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus2;
document.getElementById("showForecast3").innerHTML = weekdays[days[3]]+ '<br>' + img_todayplus3 + '<br>' + toCelsius(temperatureKelvin_todayplus3)+ '<br>'+Math.floor((windSpeed_todayplus3*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus3;
document.getElementById("showForecast4").innerHTML = weekdays[days[4]]+ '<br>' + img_todayplus4 + '<br>' + toCelsius(temperatureKelvin_todayplus4)+'<br>'+Math.floor((windSpeed_todayplus4*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus4;

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

function getDays(d) {
   
       var reset = 0;
        var day = d;
        var rest = 0;
  for (i = 0; i < 5; i++) {
    rest = (day+i)-6;
    if (day + i > 6) {

        days[i] = rest -1;
            
       
    } else {
        days[i] = day + i;
        
    }

  }


}


function checkWindDirection(windDegrees) {
    var checkDegrees = windDegrees;
 
    switch(true) {
       
        case (checkDegrees >= 78.75 && checkDegrees<= 101.25):
            return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/E.svg" width="20" height="20">';
            break;

        case (checkDegrees > 101.25 && checkDegrees<= 168.75):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/SE.svg" width="20" height="20">';
        break;

        case (checkDegrees > 168.75 && checkDegrees<= 191.25):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/S.svg" width="20" height="20">';
        break;

        case (checkDegrees > 191.25 && checkDegrees<= 258.75):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/SW.svg" width="20" height="20">';
        break;

        case (checkDegrees > 258.75 && checkDegrees<= 281.25):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/W.svg" width="20" height="20">';
        break;

        case (checkDegrees > 281.25 && checkDegrees<= 348.75):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/NW.svg" width="20" height="20">';
        break;

        case (checkDegrees > 348.75 && checkDegrees<= 11.25):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/N.svg" width="20" height="20">';
        break;

        case (checkDegrees > 11.25 && checkDegrees<= 78.74):
        return '<img src="http://users.telenet.be/tuxken/WeatherApp/weatherimg/NE.svg" width="20" height="20">';
        break;


    }
//east 78.75 - 101.25
// south east101.25 168.75
// s 168.75 - 191.25
// sw 191.25 258.75
// w 258.75 - 281.25
// nw 281.25 - 348.75
// n 348.75 - 11.25
}

function toggleCF() {

if ( toggleTemp == "Celsius") {
    document.getElementById("showTemp").innerHTML = temperature_Fahrenheit + '&#8457';
    document.getElementById("showForecast1").innerHTML = weekdays[days[1]] + '<br>' + img_Tomorrow + '<br>'+ toFahrenheit(temperatureKelvin_Tomorrow)+ '<br>'+Math.floor((windSpeed_Tomorrow*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_Tomorrow;
    document.getElementById("showForecast2").innerHTML = weekdays[days[2]]+ '<br>' + img_todayplus2 + '<br>' +  toFahrenheit(temperatureKelvin_todayplus2)+'<br>'+Math.floor((windSpeed_todayplus2*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus2;
    document.getElementById("showForecast3").innerHTML = weekdays[days[3]]+ '<br>' + img_todayplus3 + '<br>' + toFahrenheit(temperatureKelvin_todayplus3)+ '<br>'+Math.floor((windSpeed_todayplus3*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus3;
    document.getElementById("showForecast4").innerHTML = weekdays[days[4]]+ '<br>' + img_todayplus4 + '<br>' + toFahrenheit(temperatureKelvin_todayplus4)+'<br>'+Math.floor((windSpeed_todayplus4*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus4;
    toggleTemp = "Fahrenheit";

}

else {
    document.getElementById("showTemp").innerHTML = temperature_Celsius + '&#8451';
    document.getElementById("showForecast1").innerHTML = weekdays[days[1]] + '<br>' + img_Tomorrow + '<br>'+ toCelsius(temperatureKelvin_Tomorrow)+ '<br>'+Math.floor((windSpeed_Tomorrow*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_Tomorrow;
document.getElementById("showForecast2").innerHTML = weekdays[days[2]]+ '<br>' + img_todayplus2 + '<br>' +  toCelsius(temperatureKelvin_todayplus2)+'<br>'+Math.floor((windSpeed_todayplus2*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus2;
document.getElementById("showForecast3").innerHTML = weekdays[days[3]]+ '<br>' + img_todayplus3 + '<br>' + toCelsius(temperatureKelvin_todayplus3)+ '<br>'+Math.floor((windSpeed_todayplus3*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus3;
document.getElementById("showForecast4").innerHTML = weekdays[days[4]]+ '<br>' + img_todayplus4 + '<br>' + toCelsius(temperatureKelvin_todayplus4)+'<br>'+Math.floor((windSpeed_todayplus4*3600)/1000) + '&nbspKm/h' + '<br>' + windDirection_todayplus4;
 toggleTemp = "Celsius";

}

}