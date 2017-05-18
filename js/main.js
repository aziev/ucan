$(document).ready(function() {

    var elements = {
        burger: $('.burger'),
        menu: $('.pages'),
    };

    $(elements.burger).on('click', function (e) {
        e.preventDefault();

        $(elements.menu).toggleClass('active');
    });

});
