/**!
 Swap blocks
 on ready

 @contributors: Author names Agence-o
 @date-created: 2016-07-21
 @last-update: 2016-07-21
 */

;(function ($) {

    $(document).ready(function () {
        $(" #main #zone1 .list-articles.actus .main-title-with-link a.link-view-all").appendTo($(" #main #zone1 .list-articles.actus .inside"));

        $(".article .wrapper .article-title img").insertAfter($(".article .wrapper .article-intro"));
        
        $(".espace-pro .wrapper .article-title img").insertAfter($(".espace-pro .wrapper .article-intro"));

        $(".node112825 #zone2 .cxp-pagination .la-list > article.la-item > .la-item-header > img").insertAfter($(".node112825 #zone2 .cxp-pagination  .la-list >  article.la-item .la-item-content"));


        $("#u_0_0 > div:nth-child(1) > div").css({"width": "100%important!"});
    });

    // Front Video block slider
    function changeSize() {
        var tempHeight = $("#youTubeBlockVideo .slick-track li").first().height() / 2;
        $("#youTubeBlockVideo .slick-track .youtube-pres").css({"height": tempHeight});
    }

    $(document).ready(function () {
        changeSize();
    });
    $(document).load(function () {
        changeSize();
    });
    $(window).resize(function () {
        changeSize();
    });

    $("#youTubeBlockVideo .slick-track").resize(function () {
        changeSize();
    });

})(jQuery);