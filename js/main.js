$(document).ready(function() {

    var elements = {
        burger: $('.burger'),
        menu: $('.pages'),
        // detailsBtn: $('.details-btn'),
        item: $('.item'),
        modalCloseBtn: $('.modal .close'),
        modal: $('.modal'),
    };

    console.log(elements);

    $(elements.burger).on('click', function (e) {
        e.preventDefault();

        $(elements.menu).toggleClass('active');
    });

    $(elements.item).on('click', function (e) {
        e.preventDefault();

        // var $(this) = $(this).closest('.item');
        var $content = $(this).find('.modal-content');

        vm.title = $(this).find('h2').text();
        vm.category = $(this).find('.category').text();
        vm.text = $content.find('.text').html();
        vm.level = $content.find('.level').text();
        vm.info = $content.find('.info').html();

        $('.modal').addClass('active');
    });

    $(elements.modalCloseBtn).on('click', function () {
        $(this).closest('.modal').removeClass('active');
        vm.showDescription = true;
        vm.showForm = false;
        vm.showMsgSent = false;
    });

    $(document).on('click', '#get_started_btn', function (e) {
        e.preventDefault();
        vm.showDescription = false;
        vm.showForm = true;
    });

    $(document).on('click', '#back_to_courses_btn', function (e) {
        e.preventDefault();

        $(elements.modal).removeClass('active');
        vm.showMsgSent = false;
        vm.showDescription = true;
    });

    $(document).on('click', '#submit_form_btn', function (e) {
        e.preventDefault();

        vm.showForm = false;
        vm.showMsgSent = true;
    });

    $('#submit_form_btn_second').on('click', function (e) {
        e.preventDefault();
        $('#submit_form_btn').trigger('click');
    });

});

var vm = new Vue({
    el: '.modal',
    data: {
        title: '',
        category: '',
        level: 1,
        info: '',
        text: '',
        showDescription: true,
        showForm: false,
        showMsgSent: false,

        // showDescription: false,
        // // showForm: true,
        // showMsgSent: true,
    },
    watch: {
        showForm: function (value) {
            if (value) {
                $('.form').removeClass('animate')
                setTimeout(function () {
                    $('.form').addClass('animate');
                }, 30);
            }
        },
        showMsgSent: function (value) {
            if (value) {
                $('.msgSent').removeClass('animate')
                setTimeout(function () {
                    $('.msgSent').addClass('animate');
                }, 30);
            }
        },
    },
});
