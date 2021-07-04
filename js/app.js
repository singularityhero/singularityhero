"use strict";

$(document).ready(function () {
  $(function () {
    $('.accordion__item .accordion__title-wrap').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $('.accordion__content').slideUp(400);
        $('.accordion__item .accordion__title-wrap').removeClass('active');
        $('.accordion__item').removeClass('active');
      }

      $this.toggleClass('active');
      $this.parent().toggleClass('active');
      $this.next().slideToggle();
    });
  });
  var $root = $('html, body');
  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $('.js-burger').removeClass('active');
    $('.js-nav').removeClass('active');
    $('body').removeClass('overflow');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
}); // timer
// setInterval(function () {
//   var date = new Date()
//   var format = [
//     ('0' + date.getHours()).substr(-2),
//     ('0' + date.getMinutes()).substr(-2),
//     ('0' + date.getSeconds()).substr(-2),
//   ].join(':')
//   document.getElementById('timer').innerHTML = format
// }, 500)
// burger

if (document.querySelector('.js-burger')) {
  var BURGER = document.querySelector('.js-burger');
  var NAV = document.querySelector('.js-nav');
  var BODY = document.querySelector('body');
  var OVERFLOW = 'overflow';
  var ACTIVE = 'active';
  BURGER.addEventListener('click', function () {
    BURGER.classList.toggle(ACTIVE);
    NAV.classList.toggle(ACTIVE);
    BODY.classList.toggle(OVERFLOW);
  });
}