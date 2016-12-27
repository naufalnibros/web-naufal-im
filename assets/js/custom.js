(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            //  SCROLL SCRIPT FUNCTION FOR NAVBAR 
         $(function () {
             $('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
                 var $anchor = $(this);
                 $('html, body').stop().animate({
                     scrollTop: $($anchor.attr('href')).offset().top
                 }, 1000, 'easeInOutQuad');
                 event.preventDefault();
             });
         });
            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top >40) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
       


            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

             mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



