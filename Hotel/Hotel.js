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
$(window).on('scroll', function () {
    console.log($(this).scrollTop());
});
x = false;
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 150) {
        jQuery("#most").fadeIn(1000);
        jQuery("#abbos").fadeIn(1000);
        jQuery("#abboss").fadeIn(1000);
        x=true;
    } else {
        if (x==false) {
            jQuery("#abboss").fadeOut(1); 
            jQuery("#most").fadeOut(1); 
            jQuery("#abbos").fadeOut(1); 
        }
    }
});