$(document).ready(function(){

  //Smooth Scrolling
  $('.smoothscroll').click(function(e){
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function(){
      window.location.hash = target;
    });
  });

  //Scroll to top
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
});
