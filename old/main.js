$(document).ready(() => {

  $('.leftbox').on('mouseenter', function(){
        var div = $('#svg1');
        div.stop(true, true).animate({
            margin: -10,
            width: "+=20",
            height: "+=20"
        }, 'fast');
    }).on('mouseleave', function(){
        var div = $('#svg1');
        div.stop(true, true).animate({
            margin: 0,
            width: "-=20",
            height: "-=20"
        }, 'fast');
    })

    $('.rightbox').on('mouseenter', function(){
          var div = $('#svg2');
          div.stop(true, true).animate({
              margin: -10,
              width: "+=20",
              height: "+=20"
          }, 'fast');
      }).on('mouseleave', function(){
          var div = $('#svg2');
          div.stop(true, true).animate({
              margin: 0,
              width: "-=20",
              height: "-=20"
          }, 'fast');
      })


      $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var scrollVariable;
      console.log(hash);
      if (hash == "#home") {
        scrollVariable = $(hash).offset().top;
      } else {
        if (hash == "#projects") {
          scrollVariable = $(hash).offset().top - 68
        } else {
          scrollVariable = $(hash).offset().top - 54
        }
      }

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: scrollVariable
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = "!"+hash;
      }

    );
    } // End if
  });

});
