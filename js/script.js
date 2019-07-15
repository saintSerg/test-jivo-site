$(function() { //ждём загрузки DOM
    $('.btn-hamb').on('click', function(e) {
        e.preventDefault;
        $('.nav-bar').toggleClass('nav-bar_active');
    });

});
