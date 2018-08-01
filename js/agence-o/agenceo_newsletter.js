(function ($) {
    $(window).load(function () {
console.log('NEWSLETTER');
        $('<div class="block block-small global-newsletter-form"><div id="icon-newsletter-block"></div></div>').insertAfter(".site-banner .social-sharing");
        $('<div class="icon-close-newsletter"></div>').insertBefore("div.newsletter-form .nf-main-content.cxp-newsletter .box-dark");
console.log($('.newsletter-form'));
  $('.newsletter-form').addClass("closed");
    });

    $(document).on('click', '#icon-newsletter-block', function () {
       $('.newsletter-form').removeClass("closed");
        $('.block-page.newsletter-form').css({"display": "block", "opacity": "1"});
    });
 
    $(document).on('click', '.block-page.newsletter-form', function (e) {
        if (e.target != this) return;
       $('.newsletter-form').addClass("closed");
        $('.block-page.newsletter-form').css({"display": "none", "opacity": "0"});
    });

    $(document).on('click','.newsletter-form .icon-close-newsletter', function(e) {
        if(e.target != this) return;
       $('.newsletter-form').addClass("closed");
        $('.block-page.newsletter-form').css({"display":"none","opacity":"0"});
    });

})(jQuery);