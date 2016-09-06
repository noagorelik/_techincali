$.simpleWeather({
  location: 'Los Angeles, CA',
  woeid: '',
  unit: 'f',
  success: function(weather) {
    html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

    $("#la-temp").html(html);
  },
  error: function(error) {
    $("#la-temp").html('<p>'+error+'</p>');
  }
});
$.simpleWeather({
  location: 'San Francisco, CA',
  woeid: '',
  unit: 'f',
  success: function(weather) {
    html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

    $("#sf-temp").html(html);
  },
  error: function(error) {
    $("#sf-temp").html('<p>'+error+'</p>');
  }
});
$.simpleWeather({
  location: 'Silicon Valley, CA',
  woeid: '',
  unit: 'f',
  success: function(weather) {
    html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

    $("#sv-temp").html(html);
  },
  error: function(error) {
    $("#sv-temp").html('<p>'+error+'</p>');
  }
});
