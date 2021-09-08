/*! Main script file of theme */


$(document).ready(function() {
  'use strict';

  $('.js-select').on('sumo:opened', () => {
      // Do stuff here
      $('body').addClass('sumo-opened');
      console.log("Drop down opened")
  });

  $('.js-select').on('sumo:closed', () => {
      // Do stuff here
      $('body').addClass('sumo-closed');
      console.log("Drop down closed")
  });

  let $window = $(window);
  let $document = $(document);
  let $body = $("body");

  // Trigger revoke cookies functionality
  $('body').on('mouseup', 'a[href="#revoke-cookies"]', () => {
    $('.cc-revoke').trigger('click');
    return false;
  });

  // Script for deprecated browser notification
  $('.close_announcement').click((e) => {
    e.preventDefault();
    $('.update_browser_fake_body').css('display', 'none');
    $('#browser-notification-style').remove();
  });

  // Replace all .svg to .png, in case the browser does not support the format
  if(!Modernizr.svg) {
      $('img[src*="svg"]').attr('src', () => {
          return $(this).attr('src').replace('.svg', '.png');
      });
      $('*[style*="svg"]').attr('style', () => {
          return $(this).attr('style').replace('.svg', '.png');
      });
  }

  // Navigation change triggered by window width change
  function windowWidthCheck() {
    if ($(window).width() < 992) {
      $('.lang-menu').removeClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link active" href="#">LV</a>';
      html += '<a class="nav-link" href="#">EN</a>';
      html += '<a class="nav-link" href="#">RU</a>';
      $('.lang-menu').html(html);
    } 
    else {
      $('.lang-menu').addClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link navbar-toggler-right" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LV</a>';
      html += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
      html += '<a class="dropdown-item" href="#">EN</a>';
      html += '<a class="dropdown-item" href="#">RU</a></div>';
      $('.lang-menu').html(html);
    }
    } 

    windowWidthCheck();
    $(window).on('resize', windowWidthCheck);

  /* // Add CSS class to Site Header when scrollTop position of the document is not 0
  let $lastY = $window.scrollTop();
  function add_not_top() {
    $body.addClass("not--top");
  }
  function remove_not_top() {
    $body.removeClass("not--top");
  }
  let $timeout_add_not_top;
  let $timeout_remove_not_top;

  if( $lastY > 50 ) {
    add_not_top();
  }

  $(window).scroll(() => {

    let $currentY = $window.scrollTop();
    let y;
    if ( $currentY > $lastY ) {
      y = 'down';
    } else if ( $currentY < $lastY ) {
      y = 'up';
    }
    $lastY = $currentY;
    if ( $document.scrollTop() > 50 && y == 'down' ) {
      $timeout_add_not_top = setTimeout(add_not_top, 150);
    } else if ( $document.scrollTop() <= 100 && y == 'up' ) {
      $timeout_remove_not_top = setTimeout(remove_not_top, 150);
    }

  }); */

  // Select
  function selectPlugin() {
    if( $('.js-select').length > 0 ) {
      $('.js-select').each(function() {
        let $this = $(this);
        if( !$this.hasClass('js-initialized') ) {
          $this.SumoSelect({
            search: true,
            searchText: '',
            noMatch: '',
            forceCustomRendering: true,
          });
          $this.addClass('js-initialized');
        }
      });
    }
  }
  selectPlugin();

  // Animations
  AOS.init();

});