'use strict';



$(document).ready(function () {



  // preloader

  $(window).on('load', function () {

    setTimeout(function () {

      $('.p-loader').css('opacity', '0').on('transitionend', function () {

        $(this).remove();

      });

    }, 100);

  });

});



// header bg parallax

$('.header-main').parallax({

  imageSrc: 'image/h-bg.jpg',

  positionY: 'top'

});



$('.banner-call').parallax({

  imageSrc: 'image/section-bg-2.jpg'



});



// fixed navbar 

$(window).on('scroll', function () {

  var elem = $('.navbar');



  if ($(window).scrollTop() > 0) {

    elem.addClass('fixed');

  } else {

    elem.removeClass('fixed');

  }

});



// mobile menu

$('.nav__mobile-menu').on('click', function () {

  $(this).toggleClass('open');

  $('.nav__menu').slideToggle('5000', function () {

    if ($(this).css('display') == 'none') {

      $(this).removeAttr('style');

    }

  });

});


// nav menu local scroll
$('.header-menu').on('click', 'a', function() {
  event.preventDefault();
  var $target = $(this).attr('href');
  var $self = $(this);

  $('html').animate({
    scrollTop: $($target).offset().top
  }, 1000);
});


// navbar menu item local scroll
$('.navbar').on('click', 'a', function() {
  event.preventDefault();
  var $target = $(this).attr('href');
  var $self = $(this);

  $('html').animate({
    scrollTop: $($target).offset().top
  }, 1000);
});

// change active menu item on scroll
// cache selectors
var navbar = $('.navbar'),
navbarHeight = navbar.outerHeight(),
navbarMenuItems = navbar.find('a'),
scrollItems = navbarMenuItems.map(function() {
  var item = $($(this).attr('href'));

  if (item.length) return item;
});

// bind on scroll
$(window).on('scroll', function() {
  // get window scrolled position
  var fromTop = $(this).scrollTop() + navbarHeight;

  // get id of current scroll item
  var currentSection = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) {
      return this;
    }
  });

  currentSection = currentSection[currentSection.length - 1];

  var sectionId = currentSection && currentSection.length ? currentSection[0].id : '';

  // set / remove active class
  navbarMenuItems
    .parent().removeClass('active')
    .end().filter('[href="#' + sectionId + '"]').parent().addClass('active');
});



// services tabs
$('.serv-tabs').tabs({});



// image gallery
var $grid = $('.image-gal__items').isotope();

$('.image-gal__controls li').on('click', function () {

  var filterValue = $(this).attr('data-filter');

  $grid.isotope({

    filter: filterValue

  });

});



// image gallery active btn 

$('.image-gal__controls li').on('click', function () {

  var items = $('.image-gal__controls li');

  if (event.target.classList.contains('active')) {

    return;

  }



  items.each(function () {

    $(this).removeClass('active');

  });



  $(this).addClass('active');

});



// image gallery magnific

$('.image-gal__item').magnificPopup({

  delegate: 'a',

  type: 'image'

});



// testimonials section slider

$('.comments-slide').slick({

  dots: true,

  appendDots: $('.controls'),

  prevArrow: $('.buttons .left-btn'),

  nextArrow: $('.buttons .right-btn'),

  // autoplay: true



});



$(window).on('load', function () {

  // $('.testimonials .slick-arrow').removeAttr('style');

  // $('.slick-dots').removeAttr('style');

  $('.slick-dots button').html('');

});




// google map

function initMap() {

  var place = { lat: 51.5410206, lng: 0.3094163 };

  var map = new google.maps.Map(document.querySelector('.map-canvas'), {



    center: place,

    zoom: 12,

    scrollwheel: false,

    styles: [{ "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#d3d3d3" }] }, { "featureType": "transit", "stylers": [{ "color": "#808080" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#b3b3b3" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "weight": 1.8 }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "color": "#d7d7d7" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ebebeb" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#a7a7a7" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#efefef" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#696969" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "color": "#737373" }] }, { "featureType": "poi", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#d6d6d6" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, {}, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#dadada" }] }]

  });



  var point = new google.maps.Marker({

    position: place,

    map: map

  });

}