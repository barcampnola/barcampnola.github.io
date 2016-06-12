(function() {
    //generate random number between min and max
    var rand = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    $('#splash nav a.normal, #header a.normal').each(function (i, el) {
        var $el = $(el);
        $(el).on('click', function (e) {
            e.preventDefault();
            var section = $($el.attr('href'));
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000);
        })
    });

    // ----- show / hide header on scroll ----- //
    var showHideHeader = function () {
        var header = $('#header');
        var splash = $('#splash');

        if($(window).scrollTop() > splash.offset().top + splash.height()) {
            console.log("past splash");
            if (!header.is(':visible')) header.show(500);
        } else {
            if (header.is(':visible')) header.hide(500);
        }
    };
    $(window).on('scroll', function() {
        showHideHeader();
    });
    showHideHeader();
    // ----- //
}).call()
