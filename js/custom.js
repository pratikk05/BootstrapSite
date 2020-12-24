/*=========================
services
==========================*/
$(function(){
    new WOW().init(); 
    
    });
/*==========================
work
*/
$(function(){
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
    enabled:true
  }
  
  

    });
})

/*=========================
team*/
$(function(){
  $("#team-members").owlCarousel({
    items:3,
    autoplay: true,
    loop: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
            
        }
    }
    
  });
  
  });

  //testimonial
  $(function(){
    $("#customer-testimonial").owlCarousel({
      items:1,
      autoplay: true,
      loop: true,
      autoplayHoverPause:true,
      
    });
    
    });

    /*stats*/
    $(function(){
      $('.count').counterUp({
        delay: 10,
        time: 2000
    });
      
      });


 //clients
      $(function(){
        $("#clients-list").owlCarousel({
          items:6,
          autoplay: true,
          loop: true,
          autoplayHoverPause:true,
          responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:5,
            
        }
    }
        });
        
        });

// close mobile menu on click 
$(function(){ 
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
  });
});