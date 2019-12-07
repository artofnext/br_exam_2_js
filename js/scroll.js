$(document).ready(function(){
    $( "a.scroll_link" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1500);
    });
});