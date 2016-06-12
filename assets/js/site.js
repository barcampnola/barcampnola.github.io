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


    var preloadImg = function(imgUrl) {
      var img = $("<img>")
      img.attr("src", imgUrl)
      img.css("display", "none")
      $("body").append(img)
    }

    preloadImg("/assets/images/topwindow3.jpg")
    preloadImg("/assets/images/topwindow1.jpg")
    preloadImg("/assets/images/topwindow2.jpg")
    preloadImg("/assets/images/midwindow1.jpg")
    preloadImg("/assets/images/midwindow2.jpg")
    preloadImg("/assets/images/midwindow3.jpg")
    preloadImg("/assets/images/bottomfloor_1.jpg")
    preloadImg("/assets/images/bottomfloor_2.jpg")
    preloadImg("/assets/images/bottomfloor_3.jpg")

    $("#first_window").bind("mousemove",function(e){
        var offset = $("#first_window").offset();
        var clickX = e.clientX - offset.left;
        var clickY = e.clientY - offset.top;
        var width = this.clientWidth;
        var height = this.clientHeight;

        if((clickX >= 0 && clickX <= this.clientWidth * 0.3)) {
            $("#first_window").attr('src', "/assets/images/topwindow3.jpg");
        } else if((this.clientWidth * 0.3 && clickX <= this.clientWidth * 0.66667)) {
            $("#first_window").attr('src', "/assets/images/topwindow1.jpg");
        } else if((this.clientWidth * 0.66667 && clickX <= this.clientWidth)) {
            $("#first_window").attr('src', "/assets/images/topwindow2.jpg");
        }
    });

    $("#second_window").bind("mousemove",function(e){
        var offset = $("#second_window").offset();
        var clickX = e.clientX - offset.left;
        var clickY = e.clientY - offset.top;
        var width = this.clientWidth;
        var height = this.clientHeight;

        if((clickX >= 0 && clickX <= this.clientWidth * 0.3)) {
            $("#second_window").attr('src', "/assets/images/midwindow_2.jpg");
        } else if((this.clientWidth * 0.3 && clickX <= this.clientWidth * 0.66667)) {
            $("#second_window").attr('src', "/assets/images/midwindow_1.jpg");
        } else if((this.clientWidth * 0.66667 && clickX <= this.clientWidth)) {
            $("#second_window").attr('src', "/assets/images/midwindow_3.jpg");
        }
    });

    $("#third_window").bind("mousemove",function(e){
        var offset = $("#third_window").offset();
        var clickX = e.clientX - offset.left;
        var clickY = e.clientY - offset.top;
        var width = this.clientWidth;
        var height = this.clientHeight;

        if((clickX >= 0 && clickX <= this.clientWidth * 0.3)) {
            $("#third_window").attr('src', "/assets/images/topwindow3.jpg");
        } else if((this.clientWidth * 0.3 && clickX <= this.clientWidth * 0.66667)) {
            $("#third_window").attr('src', "/assets/images/topwindow1.jpg");
        } else if((this.clientWidth * 0.66667 && clickX <= this.clientWidth)) {
            $("#third_window").attr('src', "/assets/images/topwindow2.jpg");
        }
    });


    $("#door").bind("mousemove",function(e){
        var offset = $("#door").offset();
        var clickX = e.clientX - offset.left;
        var clickY = e.clientY - offset.top;
        var width = this.clientWidth;
        var height = this.clientHeight;

        if((clickX >= 0 && clickX <= this.clientWidth * 0.3)) {
            $("#door").attr('src', "/assets/images/bottomfloor_3.jpg");
        } else if((this.clientWidth * 0.3 && clickX <= this.clientWidth * 0.66667)) {
            $("#door").attr('src', "/assets/images/bottomfloor_2.jpg");
        } else if((this.clientWidth * 0.66667 && clickX <= this.clientWidth)) {
            $("#door").attr('src', "/assets/images/bottomfloor_1.jpg");
        }
    });

}).call()
