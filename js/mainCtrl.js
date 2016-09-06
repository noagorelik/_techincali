app.controller("mainCtrl", function appCtrl($scope, $rootScope, $http, $location, $state, $window) {

  $scope.slideNum = 1;

  // Weather
  $scope.getWeather = function() {
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
  }

  // Nav
  $scope.navWeather = function() {
    $('#active-bar1').addClass('show').removeClass('hidden');
    $('#active-bar2').addClass('hidden').removeClass('show');
    $('#active-bar3').addClass('hidden').removeClass('show');
    $('#active-bar4').addClass('hidden').removeClass('show');
  }
  $scope.navStartups = function() {
    $('#active-bar2').addClass('show').removeClass('hidden');
    $('#active-bar1').addClass('hidden').removeClass('show');
    $('#active-bar3').addClass('hidden').removeClass('show');
    $('#active-bar4').addClass('hidden').removeClass('show');
  }
  $scope.navFaces = function() {
    $('#active-bar3').addClass('show').removeClass('hidden');
    $('#active-bar2').addClass('hidden').removeClass('show');
    $('#active-bar1').addClass('hidden').removeClass('show');
    $('#active-bar4').addClass('hidden').removeClass('show');
  }
  $scope.navFacts = function() {
    $('#active-bar4').addClass('show').removeClass('hidden');
    $('#active-bar2').addClass('hidden').removeClass('show');
    $('#active-bar3').addClass('hidden').removeClass('show');
    $('#active-bar1').addClass('hidden').removeClass('show');
  }

  // Startup
  $scope.startupSlide1 = function() {
    // animation
    $('.slide1').addClass('comeUp');
    $('.slide2').removeClass('comeUp');
    $('.slide3').removeClass('comeUp');
    $('.slide4').removeClass('comeUp');
    $('.slide5').removeClass('comeUp');
    $('.slide6').removeClass('comeUp');
    // show / hide
    $('.slide1').addClass('block').removeClass('none');
    $('.slide2').addClass('none').removeClass('block');
    $('.slide3').addClass('none').removeClass('block');
    $('.slide4').addClass('none').removeClass('block');
    $('.slide5').addClass('none').removeClass('block');
    $('.slide6').addClass('none').removeClass('block');
    // active btn
    $('.s1').addClass('active');
    $('.s2').removeClass('active');
    $('.s3').removeClass('active');
    $('.s4').removeClass('active');
    $('.s5').removeClass('active');
    $('.s6').removeClass('active');
  }
  $scope.startupSlide2 = function() {
    $('.slide2').addClass('comeUp');
    $('.slide1').removeClass('comeUp');
    $('.slide3').removeClass('comeUp');
    $('.slide4').removeClass('comeUp');
    $('.slide5').removeClass('comeUp');
    $('.slide6').removeClass('comeUp');
    // show / hide
    $('.slide2').addClass('block').removeClass('none');
    $('.slide1').addClass('none').removeClass('block');
    $('.slide3').addClass('none').removeClass('block');
    $('.slide4').addClass('none').removeClass('block');
    $('.slide5').addClass('none').removeClass('block');
    $('.slide6').addClass('none').removeClass('block');
    // active btn
    $('.s2').addClass('active');
    $('.s1').removeClass('active');
    $('.s3').removeClass('active');
    $('.s4').removeClass('active');
    $('.s5').removeClass('active');
    $('.s6').removeClass('active');
  }
  $scope.startupSlide3 = function() {
    $('.slide3').addClass('comeUp');
    $('.slide2').removeClass('comeUp');
    $('.slide1').removeClass('comeUp');
    $('.slide4').removeClass('comeUp');
    $('.slide5').removeClass('comeUp');
    $('.slide6').removeClass('comeUp');
    // show / hide
    $('.slide3').addClass('block').removeClass('none');
    $('.slide2').addClass('none').removeClass('block');
    $('.slide1').addClass('none').removeClass('block');
    $('.slide4').addClass('none').removeClass('block');
    $('.slide5').addClass('none').removeClass('block');
    $('.slide6').addClass('none').removeClass('block');
    // active btn
    $('.s3').addClass('active');
    $('.s2').removeClass('active');
    $('.s1').removeClass('active');
    $('.s4').removeClass('active');
    $('.s5').removeClass('active');
    $('.s6').removeClass('active');
  }
  $scope.startupSlide4 = function() {
    $('.slide4').addClass('comeUp');
    $('.slide2').removeClass('comeUp');
    $('.slide3').removeClass('comeUp');
    $('.slide1').removeClass('comeUp');
    $('.slide5').removeClass('comeUp');
    $('.slide6').removeClass('comeUp');
    // show / hide
    $('.slide4').addClass('block').removeClass('none');
    $('.slide2').addClass('none').removeClass('block');
    $('.slide3').addClass('none').removeClass('block');
    $('.slide1').addClass('none').removeClass('block');
    $('.slide5').addClass('none').removeClass('block');
    $('.slide6').addClass('none').removeClass('block');
    // active btn
    $('.s4').addClass('active');
    $('.s2').removeClass('active');
    $('.s3').removeClass('active');
    $('.s1').removeClass('active');
    $('.s5').removeClass('active');
    $('.s6').removeClass('active');
  }
  $scope.startupSlide5 = function() {
    $('.slide5').addClass('comeUp');
    $('.slide2').removeClass('comeUp');
    $('.slide3').removeClass('comeUp');
    $('.slide4').removeClass('comeUp');
    $('.slide1').removeClass('comeUp');
    $('.slide6').removeClass('comeUp');
    // show / hide
    $('.slide5').addClass('block').removeClass('none');
    $('.slide2').addClass('none').removeClass('block');
    $('.slide3').addClass('none').removeClass('block');
    $('.slide4').addClass('none').removeClass('block');
    $('.slide1').addClass('none').removeClass('block');
    $('.slide6').addClass('none').removeClass('block');
    // active btn
    $('.s5').addClass('active');
    $('.s2').removeClass('active');
    $('.s3').removeClass('active');
    $('.s4').removeClass('active');
    $('.s1').removeClass('active');
    $('.s6').removeClass('active');
  }
  $scope.startupSlide6 = function() {
    $('.slide6').addClass('comeUp');
    $('.slide2').removeClass('comeUp');
    $('.slide3').removeClass('comeUp');
    $('.slide4').removeClass('comeUp');
    $('.slide5').removeClass('comeUp');
    $('.slide1').removeClass('comeUp');
    // show / hide
    $('.slide6').addClass('block').removeClass('none');
    $('.slide2').addClass('none').removeClass('block');
    $('.slide3').addClass('none').removeClass('block');
    $('.slide4').addClass('none').removeClass('block');
    $('.slide5').addClass('none').removeClass('block');
    $('.slide1').addClass('none').removeClass('block');
    // active btn
    $('.s6').addClass('active');
    $('.s2').removeClass('active');
    $('.s3').removeClass('active');
    $('.s4').removeClass('active');
    $('.s5').removeClass('active');
    $('.s1').removeClass('active');
  }

  // familiar faces
  $scope.clickedLeft = function() {
    if ($scope.slideNum === 1) {
      $scope.slideNum = 6;
    } else {
      $scope.slideNum -= 1;
    }
    // face 1
    if ($scope.slideNum === 1) {
      $('.face1').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 2
    if ($scope.slideNum === 2) {
      $('.face2').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 3
    if ($scope.slideNum === 3) {
      $('.face3').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 4
    if ($scope.slideNum === 4) {
      $('.face4').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 5
    if ($scope.slideNum === 5) {
      $('.face5').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 6
    if ($scope.slideNum === 6) {
      $('.face6').addClass('inline-block comeRight').removeClass('none comeLeft');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
    }
  }
  $scope.clickedRight = function() {
    if ($scope.slideNum === 6)
    {
      $scope.slideNum = 1;
    } else {
      $scope.slideNum += 1;
    }
    // face 1
    if ($scope.slideNum === 1) {
      $('.face1').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 2
    if ($scope.slideNum === 2) {
      $('.face2').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 3
    if ($scope.slideNum === 3) {
      $('.face3').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 4
    if ($scope.slideNum === 4) {
      $('.face4').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 5
    if ($scope.slideNum === 5) {
      $('.face5').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
      $('.face6').addClass('none').removeClass('inline-block');
    }
    // face 6
    if ($scope.slideNum === 6) {
      $('.face6').addClass('inline-block comeLeft').removeClass('none comeRight');
      $('.face2').addClass('none').removeClass('inline-block');
      $('.face3').addClass('none').removeClass('inline-block');
      $('.face4').addClass('none').removeClass('inline-block');
      $('.face5').addClass('none').removeClass('inline-block');
      $('.face1').addClass('none').removeClass('inline-block');
    }
  }

})
