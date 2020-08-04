
// This is our API key
var APIKey = "&appid=f8bddd3f5c9c2a4be96998f8a825f74a";
console.log("queryURL");
// // Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f8bddd3f5c9c2a4be96998f8a825f74a";

// // Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
//   // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
      console.log(queryURL);
      console.log(response);

//     // Transfer Content to HTML using jQuery
   
    $(".city").html("<h2>" + response.name + " Current Weather</h2>");
    // $(".weather").text("Visibility: " + response.weather.description);
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + "mph");


     // Convert the temp to fahrenheit
     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
     $(".tempF").text("Temperature (F): " + tempF.toFixed(2));
    
     // console.log your data response

    console.log("Temperature (F): " + tempF);
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    
  });


  //--------------- FIVE DAY FORECAST-------------------------------

  
// This is our API key
var APIKey = "&appid=f8bddd3f5c9c2a4be96998f8a825f74a";
console.log("queryURL");
// // Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f8bddd3f5c9c2a4be96998f8a825f74a";

// // Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
//   // We store all of the retrieved data inside of an object called "response"
  .then(function(five) {
      console.log(queryURL);
      console.log(five);

// Transfer content to HTML
$(".forecastCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country + " Day ONE</h2>");
$(".forecastDay").text("Date & Time: " + five.list[0].dt_txt);
$(".forecastWind").text("Wind Speed: " + five.list[0].wind.speed);
$(".forecastHumidity").text("Humidity: " + five.list[0].main.humidity);

 // Convert the temp to fahrenheit
 var tempF = (five.list[0].main.temp - 273.15) * 1.80 + 32;

 // add temp content to html
//  $(".forecastTemp").text("Temperature (K) " + five.list[0].main.temp);
 $(".forecastTempF").text("Temperature (F) " + tempF.toFixed(2));
  });