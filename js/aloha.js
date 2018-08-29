$(document).ready(function() {
  
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


  $("form").on("submit", function(event) {
    event.preventDefault();
    if ($("#text-input").val() == "") {
      alert("Please enter a valid e-mail address.");
    } else {
      alert("Thanks for subscribing!");
    }
  });


  // Adding items to the shopping cart icon
  // found below on codepen https://codepen.io/Paul34/pen/oxQvEv 
  
  
  var itemCount = 0;
  $('.remove-items').hide();

  $('.add-to-cart-button').click(function (){
    $('.remove-items').show();
   
    itemCount ++;
    $('#itemCount').html(itemCount).css('display', 'block');
    
  }); 

  // Removing items from cart on button click. Also re-setting the items# back to zero, removing the items count from the cart icon and removing the button. 

  $('.remove-items').on('click', function() {
    itemCount = 0;
    $('#itemCount').html('').css('display', 'none');
    $('.remove-items').hide();

  });


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


}); 