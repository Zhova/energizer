"use strict";

// window.addEventListener('DOMContentLoaded', preloaderHide, false);
// let preloader =  $('#preloader');
// function preloaderHide() {
//     window.setTimeout(function () {
//       preloader.addClass('preloader-hide');
//       preloader.css('opacity', '0');
//       setTimeout(function () {
//         preloader.css('display', 'none');
//       }, 500);
//   }, 1000);
// };
$(document).ready(function() {



  $(".footer_contact_us_customer").on("click", function() {

    $('.footer_contact_us_customer').removeClass('not_active');
    $('.footer_contact_us_reseller').removeClass('not_active');
    $('.footer_contact_us_installer').removeClass('not_active');

    $('.footer_contact_us_customer_container').removeClass('open');
    $('.footer_contact_us_reseller_container').removeClass('open');
    $('.footer_contact_us_installer_container').removeClass('open');

    $('.footer_contact_us_reseller').addClass('not_active');
    $('.footer_contact_us_installer').addClass('not_active');

    setTimeout(function() {
      $('.footer_contact_us_customer_container').addClass('open');
    }, 500);
  });



  $(".footer_contact_us_reseller").on("click", function() {

    $('.footer_contact_us_customer').removeClass('not_active');
    $('.footer_contact_us_reseller').removeClass('not_active');
    $('.footer_contact_us_installer').removeClass('not_active');

    $('.footer_contact_us_customer_container').removeClass('open');
    $('.footer_contact_us_reseller_container').removeClass('open');
    $('.footer_contact_us_installer_container').removeClass('open');

    $('.footer_contact_us_customer').addClass('not_active');
    $('.footer_contact_us_installer').addClass('not_active');

    setTimeout(function() {
      $('.footer_contact_us_reseller_container').addClass('open');
    }, 500);
  });

  $(".footer_contact_us_installer").on("click", function() {

    $('.footer_contact_us_customer').removeClass('not_active');
    $('.footer_contact_us_reseller').removeClass('not_active');
    $('.footer_contact_us_installer').removeClass('not_active');

    $('.footer_contact_us_customer_container').removeClass('open');
    $('.footer_contact_us_reseller_container').removeClass('open');
    $('.footer_contact_us_installer_container').removeClass('open');

    $('.footer_contact_us_customer').addClass('not_active');
    $('.footer_contact_us_reseller').addClass('not_active');

    setTimeout(function() {
      $('.footer_contact_us_installer_container').addClass('open');
    }, 500);
  });



});