'use strict';

$(document).ready(function () {

  //  mobile menu

  $('.menu-icon').on('click', function () {

    $(this).toggleClass('anim');

    $('.header-menu ul').slideToggle('fast', function () {

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

  
  // change active menu item on scroll
  var navbar = $('.header-menu'),
      navbarHeight = navbar.outerHeight(),
      navbarMenuItems = navbar.find('a'),
      scrollItems = navbarMenuItems.map(function() {
        var item = $($(this).attr('href'));

        if (item.length) return item;
      });

  $(window).on('scroll', function() {
    var fromTop = $(this).scrollTop() + navbarHeight;

    var currentSection = scrollItems.map(function() {
      if ($(this).offset().top < fromTop) {
        return this;
      }
    });

    currentSection = currentSection[currentSection.length - 1];
    
    var sectionId = currentSection && currentSection.length ? currentSection[0].id : '';

    navbarMenuItems
      .removeClass('active')
      .filter('[href="#' + sectionId + '"]').addClass('active');
  });
      
      
    
    
  });



  // SECTION ONE, SLIDER

  $('.sec-one_slider').slick({

    prevArrow: '<i class="fas fa-angle-left fa-2x"></i>',

    nextArrow: '<i class="fas fa-angle-right fa-2x"></i>',

    autoplay: true

  });



  // SECTION TWO, STATISTICS COUNTER 

  $('.stat__amount').counterUp({

    delay: 20,

    time: 4000

  });





// Image gallery filter

$('.image-gal').filterizr({});



// Sticky nav menu 

window.addEventListener('scroll', function () {

  var header = document.querySelector('header');

  var nav = document.querySelector('.header-nav');

  var addPadding = document.querySelector('#about-us');



  if (pageYOffset >= header.clientHeight) {

    nav.classList.add('fixed', 'fixed-anim');

  } else {

    nav.classList.remove('fixed', 'fixed-anim');

  }

});



// Header scroll down button 

document.querySelector('.scroll-down').addEventListener('click', function () {

  var header = document.querySelector('header').clientHeight;

  var top = pageYOffset;

  var scrollAnim = setInterval(function () {

    top += 10;

    window.scrollTo(0, top);



    if (top > header) {

      clearInterval(scrollAnim);

    }

  }, 5);

});



// Google maps

function myMap() {

  var mapCanvas = document.querySelector('.g-map');

  var mapOptions = {

    center: new google.maps.LatLng(43.65, 51.15),

    zoom: 15

  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

}



// map area height fix

var $googleMap = $('.g-map');

var contactFormHeight = document.querySelector('.contact-form-side');

var $hidden_layer = $('.hidden');

$(window).on('resize load', function () {

  var $height = contactFormHeight.clientHeight;

  $googleMap.css('height', $height + 'px');

  $hidden_layer.css('height', $height + 'px');

});