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
        $('#R').removeClass('title-banner-hover');
        $('#L').removeClass('title-banner-hover');
        $('#P').removeClass('title-banner-hover');
    },
    function(){ 
        $('#R').addClass('title-banner-hover');
        $('#L').addClass('title-banner-hover');
        $('#P').addClass('title-banner-hover');
    }
);

