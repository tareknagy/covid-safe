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
    var letters = $('.title-banner-letters')
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

startAnimation();


// maybe make it one letter at a time?

// function startAnimation() {
//     expandingLetters = setInterval(function() {
//         console.log('yup')
//         var letters = $('.title-banner-letters')
//         // if array.length > 2 removes first letter in array. end.
//         if (randomLetters.length === 0) {
//             randomLetters.push(6)
//         } else if(randomLetters.length === 1) {
//             randomLetters.push(7)
//         } else if(randomLetters.length === 2) {
//             randomLetters.push(9)
//         } else {
//             removeExpand = randomLetters.shift(); // do i need to save this var? only if i'm using it to remove the class, which i might not.
//             // adds random new letter to back of array;
//             randomLetters.push(Math.floor(Math.random() * $('.title-banner-letters').length));
//         };
//         for (i = 0; i < letters.length; i++) {
//             // if i is in randomLetters, add, else remove.
//                 if (randomLetters.indexOf(i) > -1) {
//                     letters.eq(i).addClass('title-banner-hover');
//                 } else {
//                     letters.eq(i).removeClass('title-banner-hover');
//                 }
//             }
//     }, 500);
//     }


// $('#title-banner').hover(
//     function(){
//         $('#R').removeClass('title-banner-hover');
//         $('#L').removeClass('title-banner-hover');
//         $('#P').removeClass('title-banner-hover');
//     },
//     function(){ 
//         $('#R').addClass('title-banner-hover');
//         $('#L').addClass('title-banner-hover');
//         $('#P').addClass('title-banner-hover');
//     }
// );


// let's make a function that keeps expanding and shrinking letters.
// $('.title-banner-letters').eq(0)

// what do i do before the hover and after the hover?
    // start by finding which ones have the class on there already and add to the array
    // on hover off it need to start by adding.
    // wait, maybe i don't need this at all ???

// only run this when not hover
// determine length based on the above
// function runs every .5 seconds
// if array.length > 2 removes first letter in array. end.
// adds random new letter to back of array
// loop to remove title-banner-hover from all, 
    // then add title-banner-hover to all with positions in array