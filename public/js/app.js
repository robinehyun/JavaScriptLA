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

  //cd-user-modal needs to show on click.
  var modal = $('.cd-user-modal'),
      register = $('#register'),
      login = $('#signin'),
      loginForm = $('#cd-login'),
      signupForm = $('#cd-signup'),
      forgotPassword = $('.forgot-password'),
      loginFromRegister = $('.register-login'),
      closeForm = $('.cd-close-form');
  //if register is clicked, the register modal should show
  register.click(function(e){
    e.preventDefault();
    modal.toggleClass('is-visible');
    loginForm.toggleClass('hide');
  });

  //if login is clicked, the login modal should show
  login.click(function(e){
    e.preventDefault();
    modal.toggleClass('is-visible');
    signupForm.toggleClass('hide');
  });

  //if login is clicked on the register modal, the login modal should show
  loginFromRegister.click(function(e){
    e.preventDefault();
    loginForm.removeClass('hide');
    signupForm.addClass('hide');
  });

  //when close button is clicked, modal should disappear
  closeForm.click(function(e){
    e.preventDefault();
    modal.removeClass('is-visible');
    if(loginForm.hasClass('hide')){
      setTimeout(function(){
        loginForm.removeClass('hide');
      },600);
    } else if (signupForm.hasClass('hide')){
      setTimeout(function(){
        signupForm.removeClass('hide');
      },600);
    } else {
      loginForm.addClass('hide');
      signupForm.addClass('hide');
    }
  });

  //close modal when esc key is pressed
  $(document).keyup(function(e){
      if(e.which=='27'){
        modal.removeClass('is-visible');
        setTimeout(function(){
          signupForm.removeClass('hide');
          loginForm.removeClass('hide');
        },600);
      }
    });

  //Mobile nav
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
      //$(".btn-header").css("border-bottom", "#1d1f20 1px solid");
    });
  });

  $(".cross").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
      //$(".btn-header").css("border-bottom", "none");
    });
  });

});
