$(document).ready(function() {

    var elements = {
        burger: $('.burger'),
        menu: $('.pages'),
        detailsBtn: $('.details-btn'),
        modalCloseBtn: $('.modal .close'),
        modal: $('.modal'),
    };

    console.log(elements);

    $(elements.burger).on('click', function (e) {
        e.preventDefault();

        $(elements.menu).toggleClass('active');
    });

    $(elements.detailsBtn).on('click', function (e) {
        e.preventDefault();

        var $item = $(this).closest('.item');
        var $content = $item.find('.modal-content');

        vm.title = $item.find('h2').text();
        vm.category = $item.find('.category').text();
        vm.text = $content.find('.text').html();
        vm.level = $content.find('.level').text();
        vm.info = $content.find('.info').html();

        $('.modal').addClass('active');
    });

    $(elements.modalCloseBtn).on('click', function () {
        $(this).closest('.modal').removeClass('active');
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
});
