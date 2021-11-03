$(document).ready(function() {
  'use strict';

  let $window = $(window);
  let $document = $(document);
  let $body = $("body");

  // --------------- Script for deprecated browser notification
  function ifIE (){
    return window.navigator.userAgent.match(/MSIE|Trident/) !== null;
  }
  ifIE();
  
  if (ifIE() === false){
    $('.update_browser_fake_body').css('display', 'none');
    $('.site-wrap').css('display', 'flex');
  } else {
    $('.update_browser_fake_body').css({display: 'table'});
    
    $('.close_announcement').click(function(e) {
    e.preventDefault();
    $('.update_browser_fake_body').css('display', 'none');
    $('#browser-notification-style').remove();
  });
  }

  // --------------- Add privacy policy in cookie window link
  $('a.cc-link').attr('href', 'privacy-policy.html');
  //console.log($('a.cc-link').attr('href'));

  // --------------- Trigger revoke cookies functionality
  $('body').on('mouseup', 'a[href="#revoke-cookies"]', function() {
    $('.cc-revoke').trigger('click');
    return false;
  });
  
  // --------------- Replace all .svg to .png, in case the browser does not the format
  if(!Modernizr.svg) {
      $('images[src*="svg"]').attr('src', function() {
          return $(this).attr('src').replace('.svg', '.png');
      });
      $('*[style*="svg"]').attr('style', function() {
          return $(this).attr('style').replace('.svg', '.png');
      });
  }

  // --------------- Adding style to active nav-link
  const url = window.location.href;
  $('.nav-item .nav-link').filter(function(){
    return url.indexOf(this.href) != -1;
  }).addClass('active');

  // --------------- Navigation change triggered by window width change
  function windowWidthCheck() {
    if ($(window).width() < 992) {
      $('#navbarSupportedContent').addClass('collapse collapsing in');

      $('.lang-menu').removeClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link active" href="#">LV</a>';
      html += '<a class="nav-link" href="#">EN</a>';
      html += '<a class="nav-link" href="#">RU</a>';
      $('.lang-menu').html(html);

      $('.footer-details').after($('.footer-bank-info'));
    } 
    else {
      $('#navbarSupportedContent').removeClass('collapse collapsing in');

      $('.lang-menu').addClass('dropdown');
      $('.lang-menu').html('');
      let html = '';
      html += '<a class="nav-link navbar-toggler-right" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LV</a>';
      html += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
      html += '<a class="dropdown-item" href="#">EN</a>';
      html += '<a class="dropdown-item" href="#">RU</a></div>';
      $('.lang-menu').html(html);

      $('.footer-menu').after($('.footer-bank-info'));
    }
  } 

  windowWidthCheck();
  $(window).on('resize', windowWidthCheck);

  $('.footer-details').on('click', function(event){
    event.preventDefault();
    $('.footer-bank-info').slideToggle();
  });

  // ---------------------- Up button
  const upBtn = document.createElement('a');
  $('body').prepend(upBtn);
  $(upBtn).html('<span class="icon-arrow-up"></span>');
  $(upBtn).attr('id', 'up-button');
  const footerOffsetTop = $('footer').offset().top - 150;

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $(upBtn).show().fadeIn();
        if ($(upBtn).offset().top >= footerOffsetTop){
          $(upBtn).css({position:'absolute'});
          $(upBtn).css({top: footerOffsetTop});
          $(upBtn).css({bottom: 'unset'}); 
        }
      if($(document).scrollTop() + window.innerHeight < footerOffsetTop){
        $(upBtn).css('position', 'fixed');
        $(upBtn).css({top: 'auto'});
        $(upBtn).css({bottom: '20px'});
      }
      
    } else {
      $(upBtn).fadeOut().hide();
    }
    
  }
  window.onscroll = function() {scrollFunction()};

  $(upBtn).on('click', function(){
    $('html, body').animate({scrollTop: 0}, 700, 'easeInQuad');
    return false;
  });

  // ---------------------- Lightslider
  const  slider = $('#lightSlider').lightSlider({
    item: 1,
    controls: false,
    loop: true,
    pager: false,
    enableDrag: false,
    auto: true,
    pauseOnHover: true,
    speed: 1000,
    pause: 15000
  });
  $('#goToPrevSlide').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#goToNextSlide').on('click', function () {
    slider.goToNextSlide();
  });

  // ------------------------- Add story divs
  function generateStoryDivs(){
    for (let i=1; i < 100; i++){
      let storyNr = 'story' + i;
      let storyDiv = $("<div></div>");
      $(storyDiv).addClass('story');
      $(storyDiv).attr('id', storyNr);
      let html = '<div class="overlay"></div><p class="story-title"></p><div class="story-overlay"></div><p class="number" id="num'+ i + '">' + i + '</p>';
      $(storyDiv).html(html);
      $('.story-container').append($(storyDiv));
    }
  }
  generateStoryDivs();

  // ------------------------- Show only 20 story divs on smaller than 992 px screens
  function hideStoryDivs () {
    // Checks screen width
    if ($(window).width() < 992) {
      $('.story-container button').remove();
      // Creates 'Add more' button and story div
      const addMoreBtn = document.createElement('button');
      $(addMoreBtn).html('Skatīt vairāk');
      $(addMoreBtn).addClass('button');
      $('.story-container').append(addMoreBtn);
      let storyDiv;
      
      // Hides story divs which id > 20
      for(let i=1; i < 100; i++){
        storyDiv = '#story' + i;
        if(i > 20) {
          $(storyDiv).hide();
        }
      }

      // Sets counter
      let counter = 1;
      // Adds click event to the Add more button, after every click adds 20 story divs
      $(addMoreBtn).on('click', function(){
        for (let i = (20*counter); i <= 20*(counter+1); i++){
          if (i<100){
            storyDiv = '#story' + i;
            $(storyDiv).show();
          } else {
            // When all 99 story divs are displayed, button dissapears
            $(addMoreBtn).remove();
          } 
        }
        // After every click adds 1 to counter 
        counter++;
      });
    } else {
      $('.story-container button').remove();
      // Show all divs on larger screens
      for(let i=1; i < 100; i++){
        let storyDiv = '#story' + i;
        $(storyDiv).show();
      }
    }
  }

  hideStoryDivs();
  $(window).on('resize', hideStoryDivs);

  // ----------------------------- Add 99 videos
  const videoUrlArray = ['https://vimeo.com/api/oembed.json?url=https://vimeo.com/251456177&width=640&height=360', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/546472954', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/251323647', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/264119207',
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/92861779'
  ];

  function addVideos(arr){
    for(let i=0; i < arr.length; i++){
      let url = arr[i];
      let num = i + 1;
      let storyNr = '#story' + num;
      let storyNrStoryOverlay = storyNr + ' .story-overlay';
      let storyNrStoryTitle = storyNr + ' .story-title';
        $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
          $(storyNr).css({backgroundImage: 'url(' + data.thumbnail_url + ')'});
          $(storyNrStoryOverlay).css({opacity: '0.7'});
          $(storyNrStoryTitle).html(data.title);
          $(storyNrStoryTitle).css({opacity: '0'});

          let comingSoonId = arr.length +1;
          let comingSoonStory = '#story' + comingSoonId;
          $(comingSoonStory).html('<div class="overlay"></div><div class="story-overlay"></div><p class="story-coming-soon">Jauns stāsts tiks pievienots drīzumā<p/><p class="number" id="num' + (arr.length+1) + '">' + (arr.length+1) + '</p>');
          
          $(storyNr).on('click', function(){
            // Removes thumbnail
            $(this).css({backgroundImage: "none"});
            $(storyNrStoryOverlay).css({opacity: '1', top: '0'});

            // Removes iframe and title in modal
            $('.modal-body').empty();
            $('.modal-title').html('');
            
            // Adds title in story div
            $(storyNrStoryTitle).css({opacity: '1'});

            // Adds iframe to modal
            $('.modal-body').prepend(data.html);
            $('.modal-title').html(data.title);
            
            // Adds data-toggle and data-target attributes and opens modal
            $(this).attr('data-toggle', 'modal');
            $(this).attr('data-target', '#newModal');
            
            // After closing of modal thumbnail is returned and title is removed
            $('#newModal').on('hidden.bs.modal', function(){
              $(storyNr).css({backgroundImage: 'url(' + data.thumbnail_url + ')'});
              $(storyNrStoryOverlay).css({opacity: '0.7'});
              $(storyNrStoryTitle).html(data.title);
              $(storyNrStoryTitle).css({opacity: '0'});
            });
               
          });
        }
        });
    }
  }

  addVideos(videoUrlArray);

  
  
  // ------------------------------- Select

  function selectPlugin() {
    if( $('.js-select').length > 0 ) {
      $('.js-select').each(function() {
        let $this = $(this);
        if( !$this.hasClass('js-initialized') ) {
          $this.SumoSelect({
            placeholder: 'Izvēlies',
            selectAll: false,
            noMatch: '',
            forceCustomRendering: true,
            floatWidth: 300
          });
          $this.addClass('js-initialized');
        }
      });
    }
  }
  selectPlugin();

  /* $('.js-select').on('sumo:opened', () => {
    // Do stuff here
    $('body').addClass('sumo-opened');
    console.log("Drop down opened")
  });

  $('.js-select').on('sumo:closed', () => {
    // Do stuff here
    $('body').addClass('sumo-closed');
    console.log("Drop down closed")
  }); */

});