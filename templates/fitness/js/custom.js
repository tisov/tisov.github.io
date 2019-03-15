'use strict';

$(document).ready(function () {
  // Preloader
  $(window).on('load', function () {
    var el = $('#preloader');

    el.addClass('hide');

    setTimeout(function () {
      if (el.hasClass('hide') == false) {
        el.css('display', 'none');
      }
    }, 5000);
  });

  // Section header
  // mobile menu 
  $(window).on('resize load', function () {
    var menu = $('.main-menu') || $('.mobile-menu');

    if (window.innerWidth <= 991) {
      $('.main-menu').removeClass('main-menu').addClass('mobile-menu');
    } else {
      $('.mobile-menu').removeClass('mobile-menu').addClass('main-menu');
    }
  });

  // mobile menu button
  $('.mobile-menu-btn').on('click', function () {
    $(this).toggleClass('active');

    // open menu
    $('.mobile-menu').slideToggle('fast', function () {
      if ($(this).css('display') == 'none') {
        $(this).removeAttr('style');
      }
    });
  });

  // local scroll
  $('.main-menu').localScroll();

  // sticky navbar
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 100) {
      $('.top-navbar').addClass('fixed-menu');
    }
    if ($(this).scrollTop() < 100) {
      $('.top-navbar').removeClass('fixed-menu');
    }

    // console.log($(this).scrollTop());
  });

  // statistics counter up
  $('.stats .count').counterUp({
    time: 2000
  });

  // Section Latest News
  //
  // news boxes slider
  $('.news-boxes').owlCarousel({
    items: 1,
    margin: 30,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayHoverPause: true,
    navContainer: '.owl-navigation',
    dotsContainer: '.dots-container',
    navElement: 'div',
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    dotsData: '',
    responsiveClass: true,
    responsive: {
      767: {
        items: 3
      },
      575: {
        items: 2
      }

    }

  });

  // news box read more button
  $('.news-btn_blue').on('click', function () {
    $(this).closest('.n-box').toggleClass('open');
  });

  $('.n-box').on('mouseleave', function () {
    $(this).removeClass('open');
  });

  // wow animate
  var wow = new WOW({
    mobile: false,
    callback: function callback(el) {
      if (el.classList.contains('stats') === 'stats') {
        console.log(123);
      }
    }
  }).init();
});

// google map
function initMap() {
  var myLatLng = { lat: 41.4303499, lng: 2.1778216 };

  var map = new google.maps.Map(document.querySelector('.g-map'), {
    center: {
      lat: 41.4304625,
      lng: 2.1792593
    },
    zoom: 15,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}