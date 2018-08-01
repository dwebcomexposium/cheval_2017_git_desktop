/**!
 Agence'O Accordion for articles lists
 
 @contributors: Guillaume Bouillon (Agence'O), Yevhenii Tretiak
 @version 0.2
 @date-created: 2016-07-21
 @last-update: 2016-08-17
 */

;(function ($) {

    var $container = $('.front .block-custom.univers > .list-articles');

    // add class to first element / add click event to toggle class
    $container.first().addClass('is-open').end().click(function (e) {
        e.preventDefault();
        $container.removeClass('is-open');
        $(this).addClass('is-open');
    });

    // add first element background-image to the container background
    // $container.each(function () {
     //    var image_src = $(this).find('.gla-item img').first().attr('src');
     //   $(this).css('background-image', 'url(' + image_src + ')');
    //});

})(jQuery);
