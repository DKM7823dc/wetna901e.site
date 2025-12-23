var isVimeo = $('iframe').hasClass('video-iframe');
var isYT = $('#videoYT-id').hasClass('videoYT-id');


if (isVimeo) {
    const iframe = $('.video-iframe');
    const player = new Vimeo.Player(iframe);


    $('.video-iframe').wrap('<div class="wrap-iframe"></div>')
        .after('  <div class="unmute-wrapper bgc-dark">\n' +
            '                                                <div class="unmute d-f">\n' +
            '                                                    <div id="unmute-button" class="button-img xl"\n' +
            '                                                         style="background-image: url(turn-sound/png/bx-volume-full.png);"\n' +
            '                                                    ></div>\n' +
            '                                                    <span style="font-size: 12px">TURN ON THE SOUND!</span>\n' +
            '                                                </div>\n' +
            '                                                <div class="player-menu d-f none">\n' +
            '                                                    <div id="mute-button" class="button-img"\n' +
            '                                                         style="background-image: url(turn-sound/png/bx-volume-mute.png);"\n' +
            '                                                    ></div>\n' +
            '                                                </div>\n' +
            '                                            </div>');


    $('#mute-button').on('click', function() {
        player.setMuted(true);
        $('.unmute').removeClass('none');
        $('.player-menu').addClass('none');
        $('.unmute-wrapper').addClass('bgc-dark');
    });
    $('#unmute-button').on('click', function() {
        player.setMuted(false);
        player.play();
        $('.unmute').addClass('none');
        $('.player-menu').removeClass('none');
        $('.unmute-wrapper').removeClass('bgc-dark');
    });
}

if (isYT) {
    var videoID = $('#videoYT-id').val();

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 1. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('iframe-videoYT', {
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'rel': 0,
                'mute': 1,
                'loop': 1
            }
        });
    }

    // 2. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }
    // 3. The API calls this function when the player's state changes.
    var done = false;

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
        }
    }

    function stopVideo() {
        player.stopVideo();
    }
    if ($('#iframe-videoYT').hasClass('iframe-videoYT')) {
        $('#iframe-videoYT').wrap('<div class="wrap-iframe"></div>')
            .after('  <div class="unmute-wrapper bgc-dark">\n' +
                '                                                <div class="unmute d-f">\n' +
                '                                                    <div id="unmute-button" class="button-img xl"\n' +
                '                                                         style="background-image: url(turn-sound/png/bx-volume-full.png);"\n' +
                '                                                    ></div>\n' +
                '                                                    <span style="font-size: 12px">TURN ON THE SOUND!</span>\n' +
                '                                                </div>\n' +
                '                                                <div class="player-menu d-f none">\n' +
                '                                                    <div id="mute-button" class="button-img"\n' +
                '                                                         style="background-image: url(turn-sound/png/bx-volume-mute.png);"\n' +
                '                                                    ></div>\n' +
                '                                                </div>\n' +
                '                                            </div>');
    }

    $('#mute-button').on('click', function() {
        player.mute();
        $('.unmute').removeClass('none');
        $('.player-menu').addClass('none');
        $('.unmute-wrapper').addClass('bgc-dark');
    });
    $('#unmute-button').on('click', function() {
        player.unMute();
        player.playVideo();
        $('.unmute').addClass('none');
        $('.player-menu').removeClass('none');
        $('.unmute-wrapper').removeClass('bgc-dark');
    });
};