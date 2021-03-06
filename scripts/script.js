$(document).ready(function () {
  'use strict';

  var $window = $(window);

  setTimeout(function() {
    $("body").removeClass("is-loading").addClass("is-loaded");
    $(".pre-loader").fadeOut();
    $window.trigger('scroll')
  }, 800);

  var animateMenu = function() {
    $('.navigation-trigger').click(function() {
      $('.menu-list').slideToggle(500)
    })
  };
  animateMenu();

  $window.resize(function() {
    if ($window.width() > 500) {
      $('.menu-list').removeAttr('style')
    }
  });

  var animateBar = function() {
    $('.navigation-trigger').click(function() {
      $('.section-menu-horizontal-line').animate({
        width: '150px'
      }, 500).animate({
        width: '106px'
      }, 500)
    })
  };
  animateBar();

  var parent, ink, d, x, y;

  $('.menu-item a').click(function(e) {
    e.preventDefault();
    parent = $(this).parent();
    if (parent.find('.ink').length == 0)
      parent.prepend("<span class='ink'></span>");
    ink = parent.find('.ink');
    ink.removeClass('animate');
    if (!ink.height() && !ink.width()) {
      d = Math.max(parent.outerWidth(), parent.outerHeight());
      ink.css({
        height: d,
        width: d
      })
    }
    x = e.pageX - parent.offset().left - ink.width() / 2;
    y = e.pageY - parent.offset().top - ink.height() / 2;
    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass('animate')
  });

  $('.arrow-down-home').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: eval($(".section-menu").offset().top - 15)
    }, 2000)
  });

  $('.arrow-down-about').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: eval($(".section-contact").offset().top)
    }, 2000)
  });

  // Animates links for menu
  $("a[href^=\\#]").click(function (event) {
    event.preventDefault();
    var $link = $(this);
    var $target = $($link.attr("href"));
    $("html, body").animate({
      scrollTop: $target.offset().top
    }, 2000)
  })
})
