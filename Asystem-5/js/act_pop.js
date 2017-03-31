$(document).ready(function() {

           function  Pop_out(){
                $('#act_detail_pop_outer').fadeIn();
                $('.Act_Detail_Pop').css('margin-top', "-($('#Act_Detail_Pop').outerHeight()/2");
           }

           $('.act_detail_pop_close').click(function() {
               /* Act on the event */
               $('#act_detail_pop_outer').fadeOut();
           });

          $('.act_detail_a').click(function() {
              /* Act on the event */
                 $('#act_detail_pop_outer').fadeIn();
                $('.Act_Detail_Pop').css('margin-top', "-($('#Act_Detail_Pop').outerHeight()/2");
          });
});