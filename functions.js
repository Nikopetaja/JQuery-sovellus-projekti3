$(document).ready(function() {
    $('#searchBtn').click(function() {
        var city = $('#cityInput').val();
        if (city !== '') {
            getWeather(city);
        } else {
            $('#weatherInfo').html('<p>Please enter a city name.</p>');
        }
    });
});

function getWeather(city) {
    var apiKey = '54427a529b0d48daacb111740241104';
    var baseUrl = 'https://api.weatherapi.com/v1/current.json';
    var url = baseUrl + '?key=' + apiKey + '&q=' + city;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            displayWeather(data);
        },
        error: function(xhr, status, error) {
            $('#weatherInfo').html('<p>Error: ' + error + '</p>');
        }
    });
}

function displayWeather(data) {
    var weatherInfo = '<h2>' + data.location.name + ', ' + data.location.country + '</h2>';
    weatherInfo += '<p>Temperature: ' + data.current.temp_c + '°C</p>';
    weatherInfo += '<p>Condition: ' + data.current.condition.text + '</p>';

    $('#weatherInfo').html(weatherInfo);
}
