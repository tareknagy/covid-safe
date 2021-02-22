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

// transition code
function bgScroll() {
    var bodyEl = $('body');
    inView.threshold(0.5);
    inView('.landing')
    .on('enter', function() {
        bodyEl.removeClass('bg-transition');
    })
    .on('exit', function() {
        bodyEl.addClass('bg-transition');
    });
}

// init all
startAnimation();
bgScroll();