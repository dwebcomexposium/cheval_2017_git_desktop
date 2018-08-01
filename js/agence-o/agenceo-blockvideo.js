/**!
 Agence'O Youtube video wall
 Create a Youtube video wall with Youtube API scripts

 @contributors: Nicolas Bugeja (Agence'O), Guillaume Bouillon (Agence'O), Yevhenii Tretiak
 @version 1.2
 @date-created: 2016-07-12
 @last-update: 2016-08-12
 */

;(function ($) {

    // Init du mur de video Youtube sur la Home

    if (typeof gapi !== 'undefined') {
        gapi.load('client', youtubeLoadCallback);
    }
    if (typeof playlistId === 'undefined') {
        //var playlistId = 'PLyjOyo9BO-dMVhJSAafjHEbNnfMLIGohZ'; // Paroles d'exposants
        //var playlistId = 'PLyjOyo9BO-dOHIf2X69LrsQZ7h9_XJHmO'; // Les chevaux du sud
        var playlistId = 'PLyjOyo9BO-dMXHFNw1tLuyd5s8y1rC-3p'; // Trophées de l'innovation
    }

    function youtubeLoadCallback() {
        gapi.client.setApiKey('AIzaSyBxVUNwrx2w6WkvcTAMEE22Ov1tSscsaz4');
        gapi.client.load('youtube', 'v3', function () {
            handleAPILoaded();
        });
    }

    function handleAPILoaded() {
        var requestOptions = {
            playlistId: playlistId,
            part: 'snippet',
            maxResults: 15
        };

        var request = gapi.client.youtube.playlistItems.list(requestOptions);
        request.execute(function (response) {

            var playlistItems = response.result.items,
                sliderHtml = '';

            if (playlistItems.length) {

                sliderHtml = createTitleTile(sliderHtml);

                $.each(playlistItems, function (index, item) {
                    sliderHtml = createTile(sliderHtml, item.snippet);
                });

                $('#youTubeBlockVideo').html(sliderHtml);

                $('#youTubeBlockVideo').slick({
                    arrows: true,
                    //centerMode: true,
                    infinite: true,
                    rows: 2,
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    swipeToSlide: true,
                    variableWidth: true
                });
            }
        });
    }

    function createTitleTile(currentHtml) {
        var html_title = $('.block-video .block-title').html();

        currentHtml += '<div class="video-item video-block-title">' + html_title + '</div>';

        return currentHtml;
    }

    function createTile(currentHtml, videoSnippet) {
        var title = videoSnippet.title,
            videoId = videoSnippet.resourceId.videoId,
            thumbUrl = videoSnippet.thumbnails.medium.url;

        currentHtml += '<div class="video-item">'
            + '   <a href="https://www.youtube.com/watch?v=' + videoId + '&list=' + playlistId + '&index=1" target="_blank">'
            + '       <img src="' + thumbUrl + '" alt="' + title + '" title="' + title + '" />'
            + '       <span class="video-title">' + title + '</span>'
            + '   </a>'
            + '</div>';

        return currentHtml;
    }

// Fin des fonctions pour Youtube


})(jQuery);
