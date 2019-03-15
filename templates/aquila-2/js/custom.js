'use strict';



// jQuery scripts ---------------------------------------



$(document).ready(function () {



  // Navbar menu icon animate

  $('.navbar__icon').on('click', function () {

    $(this).toggleClass('open');

  });



  // Responsive menu onclick show/hide

  $('.navbar__icon').on('click', function () {

    var navbar_menu = $('.navbar__menu');

    navbar_menu.slideToggle('fast', function () {

      if (navbar_menu.css('display') == 'none') {

        navbar_menu.removeAttr('style');

      }

    });

  });



  // Fixed navbar 

  var header_height = $('.header-main').height() / 2;

  var topnav = $('.top-nav');



  $(window).on('scroll load', function () {

    if (pageYOffset > header_height) {

      topnav.addClass('fixed-nav');

    } else {

      topnav.removeClass('fixed-nav');

    }

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
      .removeClass('active')
      .filter('[href="#' + sectionId + '"]').addClass('active');
  });


  // Video modal box

  var v_modal = $('.v-modal');

  var v_modal_content = $('.v-modal__content');



  $('.video-box__icon a').on('click', function () {

    event.preventDefault();

  });

  $('.video-box__icon').on('click', function () {

    var video = '<iframe height="101%" width="101%" src="https://www.youtube.com/embed/LgvseYYhqU0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

    v_modal_content.append(video);

    v_modal.css('display', 'flex');

  });



  // Video modal close

  $('.v-modal__close').on('click', function () {

    v_modal_content.empty();

    v_modal.css('display', 'none');

  });



  // product product boxes height fix

  $(window).one('load', function () {

    var elem = $('.pro-info-box');

    var parentHeight = elem.parent().css('height');

    elem.css('height', parentHeight);

  });

  // product items slider

  $('.items-slider').slick({

    dots: true,

    speed: 500,

    arrows: false,

    slidesToShow: 4,

    slidesToScroll: 4,

    responsive: [{

      breakpoint: 991,

      settings: {

        slidesToShow: 2,

        slidesToScroll: 1

      }

    }, {

      breakpoint: 575,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1

      }

    }]

  });

});
