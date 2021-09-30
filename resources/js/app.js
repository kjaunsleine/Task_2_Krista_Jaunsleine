/*! Main script file of theme */

$(document).ready(function() {
  'use strict';

  /* function importAll(r) {
    return r.keys().map(r);
  } */
  
  //const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

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

  // Replace all .svg to .png, in case the browser does not the format
  if(!Modernizr.svg) {
      $('images[src*="svg"]').attr('src', () => {
          return $(this).attr('src').replace('.svg', '.png');
      });
      $('*[style*="svg"]').attr('style', () => {
          return $(this).attr('style').replace('.svg', '.png');
      });
  }

  // Adding style to active nav-link

  const url = window.location.href;
  $('.nav-item .nav-link').filter(function(){
    return url.indexOf(this.href) != -1;
  }).addClass('active');

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

  const  slider = $('#lightSlider').lightSlider({
    item: 1,
    controls: false,
    loop: true,
    pager: false,
    enableDrag: false,
    auto: true,
    pauseOnHover: true,
    pause: 6000
  });
  $('#goToPrevSlide').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#goToNextSlide').on('click', function () {
    slider.goToNextSlide();
  });

  // Form submit message

  $('#applForm').on('submit', function(event){
    event.preventDefault();
    for (const div of $('.form-info')){
      $(div).hide();
    }
    const submitMsg = document.createElement('div');
    $(submitMsg).addClass('submit-message');
    const html = "<p>Paldies, ka sapņo!</p><p>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</p>";
    $(submitMsg).html(html);
    document.querySelector('.form-container').appendChild(submitMsg);
    $('#submit').hide();
  });

  // Add story divs
  function generateStoryDivs(){
    for (let i=1; i < 100; i++){
      let storyDiv = $("<div></div>");
      $(storyDiv).addClass('story');
      $(storyDiv).attr('id', `story${i}`);
      let html = `<div class="overlay"></div><p class="story-title"></p><div class="story-overlay"></div><p class="number" id="num${i}">${i}</p>`;
      $(storyDiv).html(html);
      $('.story-container').append($(storyDiv));
    }
  }
  generateStoryDivs();

  // Add 99 videos

  const videoUrlArray = ['https://vimeo.com/api/oembed.json?url=https://vimeo.com/251456177&width=640&height=360', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/546472954', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/251323647', 
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/264119207',
  'https://vimeo.com/api/oembed.json?url=https://vimeo.com/92861779'
  ];

  function addVideos(arr){
    for(let i=0; i < arr.length; i++){
      let url = arr[i];
        $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
          $(`#story${i+1}`).css({backgroundImage: `url(${data.thumbnail_url})`});
          $(`#story${i+1} .story-overlay`).css({opacity: '0.7'});
          $(`#story${i+1} .story-title`).html(data.title);
          $(`#story${i+1} .story-title`).css({opacity: '0'});
          
          $(`#story${arr.length+1}`).html(`<div class="overlay"></div><div class="story-overlay"></div><p class="story-coming-soon">Jauns stāsts tiks pievienots drīzumā<p/><p class="number" id="num${arr.length+1}">${arr.length+1}</p>`);
          
          $(`#story${i+1}`).on('click', function(){
            // Removes thumbnail
            $(this).css({backgroundImage: "none"});
            $(`#story${i+1} .story-overlay`).css({opacity: '1', top: '0'});

            // Removes iframe and title in modal
            $('.modal-body').empty();
            $('.modal-title').html('');
            
            // Adds title in story div
            $(`#story${i+1} .story-title`).css({opacity: '1'});

            // Adds iframe to modal
            $('.modal-body').prepend(data.html);
            $('.modal-title').html(data.title);
            
            // Adds data-toggle and data-target attributes and opens modal
            $(this).attr('data-toggle', 'modal');
            $(this).attr('data-target', '#newModal');
            
            // After closing of modal thumbnail is returned and title is removed
            $('#newModal').on('hidden.bs.modal', function(){
              $(`#story${i+1}`).css({backgroundImage: `url(${data.thumbnail_url})`});
              $(`#story${i+1} .story-overlay`).css({opacity: '0.7'});
              $(`#story${i+1} .story-title`).html(data.title);
              $(`#story${i+1} .story-title`).css({opacity: '0'});
            });
               
          });
        }
        });
    }
  }

  addVideos(videoUrlArray);

  // Select

  //$('#location-select').SumoSelect();
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
          });
          $this.addClass('js-initialized');
        }
      });
    }
  }
  selectPlugin();

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

});


