$(document).ready(function() {

 

  

  $('#hm').on('click', function() {

    $('.nav-link').removeClass('active');
    $('#hm.nav-link').addClass('active');

});

    $('.nav-link').removeClass('active');

    $('.navbar-toggler').on('click', function() {
        $('#navbarNav').toggle();
    });

    $('#abt').on('click', function() {
     
      $('.nav-link').removeClass('active');
      $('#abt.nav-link').addClass('active');

      $('html, body').animate({ 
       scrollTop: $('#about').offset().top - 60
    }, 100);
 });

    $('#vm').on('click', function() {
        
         $('.nav-link').removeClass('active');
         $('#vm.nav-link').addClass('active');
         $('html, body').animate({ 
          scrollTop: $('#vision-mission').offset().top - 60
       }, 100);
    });

    $('#wrk').on('click', function() {
        
         $('.nav-link').removeClass('active');
         $('#wrk').addClass('active');
         $('html, body').animate({ 
          scrollTop: $('#work').offset().top - 60
       }, 100);
    });

    $('#brnd').on('click', function() {

      $('.nav-link').removeClass('active');
      $('#brnd').addClass('active');

        $('html, body').animate({ 
          scrollTop: $('#brands').offset().top - 60
       }, 100);

       $('.nav-link').removeClass('active');
      $('#brnd').addClass('active');

    });

    $('#ctct').on('click', function() {

    
       
      $('.nav-link').removeClass('active');
      $('#ctct').addClass('active');

      $('html, body').animate({ 
        scrollTop: $('#contact').offset().top - 60
     }, 100);

     $('.nav-link').removeClass('active');
      $('#ctct').addClass('active');

  });

  $('.collapse').css('display','none');
  $('#headingOne').on('click', function() {

    $('html, body').animate({ 
      scrollTop: $('#headingOne').offset().top - 60
   }, 100);
      
     
     

      $('.collapse').css('display','none');
      $('#collapseOne').toggle();

     
    
});

$('#headingTwo').on('click', function() {
      
  $('html, body').animate({ 
    scrollTop: $('#headingOne').offset().top - 60
 }, 100);
 
 $('.collapse').css('display','none');
    $('#collapseTwo').toggle(); 

 
});

$('#headingThree').on('click', function() {

  $('html, body').animate({ 
    scrollTop: $('#headingTwo').offset().top - 60
 }, 100);
 
  $('.collapse').css('display','none');
    $('#collapseThree').toggle(); 
 
});

$('#headingFour').on('click', function() {

  $('html, body').animate({ 
    scrollTop: $('#headingTwo').offset().top - 60
 }, 100);

 $('.collapse').css('display','none');
  

  $('.collapse').css('display','none');
    $('#collapseFour').toggle(); 
 
});

$('#headingFive').on('click', function() {
      
  $('html, body').animate({ 
    scrollTop: $('#headingThree').offset().top - 60
 }, 100);

 $('.collapse').css('display','none');
    $('#collapseFive').toggle(); 
 
});

$('#headingSix').on('click', function() {
 
  $('html, body').animate({ 
    scrollTop: $('#headingFour').offset().top - 60
 }, 100);

 
    $('.collapse').css('display','none');
  $('#collapseSix').toggle();
   
});

$('#headingSeven').on('click', function() {
      
  $('html, body').animate({ 
    scrollTop: $('#headingFive').offset().top - 60
 }, 100);

 
    $('.collapse').css('display','none');
  $('#collapseSeven').toggle();
   
 
});

$('#headingEight').on('click', function() {
      
 
  $('html, body').animate({ 
    scrollTop: $('#headingSix').offset().top - 60
 }, 100);

 
    $('.collapse').css('display','none');
    $('#collapseEight').toggle();

   
 
});

$('#headingNine').on('click', function() {


  $('html, body').animate({ 
    scrollTop: $('#headingSeven').offset().top - 60
 }, 100);
  
  $('.collapse').css('display','none');
    $('#collapseNine').toggle();
  
 
});

$('.collapse').on('click', function() {
  
  $('.collapse').css('display','none'); } )

$('.title-banner').on('click', function() {
  $('html, body').animate({ 
    scrollTop: $('.homepage-navbar').offset().top 
 }, 100);
});

$('.brands').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.homepage .nav-link').removeClass('active');
$('.homepage #hm.nav-link').addClass('active');

$('.about-us .nav-link').removeClass('active');
$('.about-us #abt.nav-link').addClass('active');



$('.mb-navbar .navbar-toggler').on('click', function() {

  $('.mb-navbar .navbar-collapse').toggle();
})



});

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });


  $(window).scroll(function(){

  var scroll = $(window).scrollTop();
  var scrollAbout = $('#about').offset().top - 70;
  var scrollvm = $('#vision-mission').offset().top - 70;
  var scrollwork = $('#work').offset().top - 70;
  var scrollbrands = $('#brands').offset().top - 70;
  var scrollcontact = $('#contact').offset().top - 70;

  if(scroll > scrollcontact) {

    $('.nav-link').removeClass('active');
    $('#ctct.nav-link').addClass('active');

  }else if(scroll > scrollbrands) {
    $('.nav-link').removeClass('active');
    $('#brnd.nav-link').addClass('active');
  }else  if (scroll > scrollwork) {
    $('.nav-link').removeClass('active');
    $('#wrk.nav-link').addClass('active');
  }  else if(scroll > scrollvm ) {
    $('.nav-link').removeClass('active');
       $('#vm.nav-link').addClass('active');
       
  }
  else if(scroll > scrollAbout) {
    $('.homepage .nav-link').removeClass('active');
       $('.homepage #abt.nav-link').addClass('active');
       
  } else { $('.homepage .nav-link').removeClass('active');
    $('.homepage #hm.nav-link').addClass('active');}

    var scrolltodisplayAbout = $('#about').offset().top - 80;
    if(scroll > scrolltodisplayAbout) {
      $('.homepage .about-section').css('display','block');
      $('.homepage .about-video').css('display','block');
    }

    var scrolltodisplayVm = $('#vision-mission').offset().top - 80;
    if(scroll > scrolltodisplayVm) {

      $('.homepage .vision-mission').css('display','block');
      $('.homepage .vision-mission-video-section').css('display','flex');
      $('homepage .vm-mbl').css('display','block');
    }

    else { $('homepage .vm-mbl.vision-mission-video').css('display','none');}
    var scrolltodisplayWork = $('#work').offset().top - 80;
    if( scroll > scrolltodisplayWork ) {

      $('.homepage .work').css('display','block');
    }

    
   
 });

 