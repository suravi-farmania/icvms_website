jQuery(document).ready(function ($) {
   
    // ================== Dropdown

    if($(window).width() < 1025)
    {
        $(function () {
            $('#myUL li').click(function (e) {
                e.stopPropagation();
                $(this).children('ul').stop().slideToggle(400);
            });
        });
    } else {
        $('#myUL li').hover(function () {
            $(this).children('ul').stop().slideToggle(400);
        });
    }
    
    // ================== Search panel

});