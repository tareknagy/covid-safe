// Code by Tarek Nagy 2021 tareknagy.com

var randomLetters = []
var expandingLetters

$('.title-banner-letters').hover(
    function(){ 
        $(this).addClass('title-banner-hover');
    },
    function(){
        $(this).removeClass('title-banner-hover');
    }
);

$('#title-banner').hover(
    function(){
        clearInterval(expandingLetters)
    },
    function(){ 
        startAnimation();
    }
);

function startAnimation() {
expandingLetters = setInterval(function() {
    var letters = $('.title-banner-letters');
    // random idx for letter
    var randomLetter = Math.floor(Math.random() * $('.title-banner-letters').length);
    for (i = 0; i < letters.length; i++) {
        // if i is in randomLetters, add, else remove.
            if (i === randomLetter) {
                letters.eq(i).addClass('title-banner-hover');
            } else {
                letters.eq(i).removeClass('title-banner-hover');
            }
        }
}, 1000);
}

// transition bg colour code
function bgScroll() {
    var bodyEl = $('body');
    var linkEl = $('.links')
    inView.threshold(0.7);
    if (!inView.is(document.querySelector('.landing'))) {
        bodyEl.addClass('bg-transition');
    };
    inView('.landing')
    .on('enter', function() {
        bodyEl.removeClass('bg-transition');
    })
    .on('exit', function() {
        bodyEl.addClass('bg-transition');
    });
    if (inView.is(document.querySelector('.links'))) {
        linkEl.addClass('link-scroll');
    };
    inView('.links')
    .on('enter', function() {
        linkEl.addClass('link-scroll');
    })
    .on('exit', function() {
        linkEl.removeClass('link-scroll');
    });
}

// // hover over images
$(document).ready(function() {
    $('#hover-nez').mousemove(function(e) {
        $img = $('#cursor-nez')
        $img.stop(1, 1).show();
        $img.offset({
            top: e.pageY + 20,
            left: e.pageX - 30
        });
    }).mouseleave(function() {
        $img = $('#cursor-nez')
        $img.hide();
    }).on({'touchstart' : function(e) {
        $img = $('#cursor-nez')
        $img.stop(1, 1).show();
        $img.offset({
            top: e.pageY + 20,
            left: e.pageX - 30
        });
    }}).on({'end' : function(e) {
        $img = $('#cursor-nez')
        $img.hide();
    }})
});
$(document).ready(function() {
    $('#hover-bouche').mousemove(function(e) {
        $img = $('#cursor-bouche')
        $img.stop(1, 1).show();
        $img.offset({
            top: e.pageY + 20,
            left: e.pageX - 30
        });
    }).mouseleave(function() {
        $img = $('#cursor-bouche')
        $img.hide();
    });
});
$(document).ready(function() {
    $('#hover-menton').mousemove(function(e) {
        $img = $('#cursor-menton')
        $img.stop(1, 1).show();
        $img.offset({
            top: e.pageY + 20,
            left: e.pageX - 30
        });
    }).mouseleave(function() {
        $img = $('#cursor-menton')
        $img.hide();
    });
});

// paralax scroll
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();  
    var evenImgPos = scrollTop / 2.5 + 'px';
    $('.landing').css('transform', 'translateY(' + evenImgPos + ')');
});

// init all
startAnimation();
bgScroll();