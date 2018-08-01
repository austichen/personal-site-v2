$(document).ready(function(){
    $("#nav-dropdown-button").click(function(){
        $('.dropdown-items').toggleClass('show-dropdown')
    });
    $(window).resize(function(){
      if($(window).width()>768) {
        $('.dropdown-items').removeClass('show-dropdown')
      }
    })
    $('.project-anchor').click(function() {
      var location=`#${$(this).attr('location')}`
      $('html,body').animate({scrollTop: $(location).offset().top}, 'slow')
    })
});
