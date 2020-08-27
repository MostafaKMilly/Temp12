function myfun() {
    if ($(document).scrollTop() < 80) {
        x = document.getElementById('mo');
        if (x.classList.contains("bg-transparent")) {
            x.classList.remove('bg-transparent');
            $('#mo').addClass('importantRule');
        }
        else {
            $('#mo').removeClass('importantRule');
            x.classList.add('bg-transparent');
            
        }
    }
   
};
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop(); 
    console.log(scroll);
});
/*$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if ($(window).width() >= 768) {
    x = document.getElementsByClassName('nav-item');
    if (scroll>600)
    {
        $('li.active a').css('color', '');
        x[4].classList.remove('active');
        x[3].children[0].style.color ="#e3ac22"
        
    }
    else 
    {
        x[3].children[0].style.color ="";
        x[4].classList.add('active');
    }
        if (scroll > 1112) {
        x[3].children[0].style.color = "";
        x[2].children[0].style.color = "#e3ac22";
        
    }
    else {
        if (scroll>600) {
        x[2].children[0].style.color = "";
        x[3].children[0].style.color = "#e3ac22";
        
    }
    }

        if (scroll > 2172) {
            x[2].children[0].style.color = "";
            x[1].children[0].style.color = "#e3ac22";

        }
        else {
            if (scroll > 1112) {
                x[1].children[0].style.color = "";
                x[2].children[0].style.color = "#e3ac22";
            }
        }
        if (scroll > 3757) {
            x[1].children[0].style.color = "";
            x[4].classList.add('active');
            $('li.active a').css('color', '#e3ac22');
        }

    }

});*/


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

})(jQuery); // End of use strict
